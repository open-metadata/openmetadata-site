import type { NextApiRequest, NextApiResponse } from "next";
import * as cheerio from "cheerio";
import TurndownService from "turndown";

const SITE_ORIGIN =
  process.env.SITE_URL?.replace(/\/$/, "") || "https://open-metadata.org";

// Only allow path segments that contain safe URL characters (no traversal, no protocol)
const SAFE_SEGMENT = /^[a-zA-Z0-9._~%-]+$/;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rawSlug = (req.query.slug as string[] | undefined) ?? [];

  const cleanSlug = rawSlug.map((s) =>
    s.endsWith(".md") ? s.slice(0, -3) : s
  );

  if (cleanSlug.some((s) => !SAFE_SEGMENT.test(s))) {
    res
      .status(400)
      .setHeader("Content-Type", "text/plain; charset=utf-8")
      .send("Invalid path");
    return;
  }

  const isIndex =
    cleanSlug.length === 1 && cleanSlug[0] === "index";

  const path =
    cleanSlug.length === 0 || isIndex
      ? "/"
      : `/${cleanSlug.join("/")}`;

  const fetchUrl = `${SITE_ORIGIN}${path}`;

  try {
    const response = await fetch(fetchUrl);

    if (!response.ok) {
      res
        .status(404)
        .setHeader("Content-Type", "text/plain; charset=utf-8")
        .send("Page not found");
      return;
    }

    const html = await response.text();

    if (!html) {
      res
        .status(500)
        .setHeader("Content-Type", "text/plain; charset=utf-8")
        .send("Empty HTML response");
      return;
    }

    const $ = cheerio.load(html);

    $(
      [
        "nav",
        "footer",
        "aside",
        "script",
        "style",
        "noscript",
        "iframe",
      ].join(",")
    ).remove();

    $(
      [
        ".sidebar",
        ".navbar",
        ".footer",
        ".cookie-modal",
        ".announcement-banner",
        ".table-of-contents",
        ".toc",
        ".summit-bg",
        ".nav-strip",
      ].join(",")
    ).remove();

    // Remove YouTube article elements before selecting content
    // (react-lite-youtube-embed renders <article class="yt-lite"> which would
    //  match $("article") and return only the play button — empty markdown)
    $("article.yt-lite").remove();

    const content = $("body").html();

    if (!content) {
      res
        .status(500)
        .setHeader("Content-Type", "text/plain; charset=utf-8")
        .send("No content found");
      return;
    }

    const turndownService = new TurndownService({
      headingStyle: "atx",
      codeBlockStyle: "fenced",
      bulletListMarker: "-",
    });

    turndownService.addRule("pre", {
      filter: ["pre"],
      replacement: function (content) {
        return `\n\`\`\`\n${content}\n\`\`\`\n`;
      },
    });

    turndownService.addRule("links", {
      filter: "a",
      replacement: function (content, node) {
        const href = (node as HTMLAnchorElement).getAttribute("href");
        if (!href) return content;
        return `[${content}](${href})`;
      },
    });

    const markdown = turndownService.turndown(content);

    res
      .status(200)
      .setHeader("Content-Type", "text/markdown; charset=utf-8")
      .setHeader("X-Robots-Tag", "index, follow")
      .send(markdown);
  } catch (error) {
    console.error("Markdown generation error:", error);
    res
      .status(500)
      .setHeader("Content-Type", "text/plain; charset=utf-8")
      .send("Error generating markdown");
  }
}
