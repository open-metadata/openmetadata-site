import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";

// Ported from the Collate site's utils/markdown.js + renderMarkdownToHtml.js.

export const generateSlug = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-+)|(-+$)/g, "")
    .trim();

const youTubeIframe = (id: string) =>
  `<div style="position:relative;width:100%;padding-bottom:56.25%;margin:20px 0"><iframe src="https://www.youtube.com/embed/${id}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" frameborder="0" allowfullscreen></iframe></div>`;

export const preprocessMarkdown = (markdown: string): string => {
  let out = markdown.replace(/!\[([^\]]*)\]\(data:image\/[^;]+;base64,[^)]+\)/g, "");
  // Hashnode image format: ![](url align="center") -> ![](url)
  out = out.replace(/!\[([^\]]*)\]\(([^)]+)\s+align="[^"]*"\)/g, "![$1]($2)");
  // %[youtube-url] embeds
  out = out.replace(
    /%\[https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)[^\]]*\]/g,
    (_m, id) => youTubeIframe(id)
  );
  return out;
};

export const extractH2s = (markdown: string): { title: string; id: string }[] => {
  const re = /^## (.+)$/gm;
  const out: { title: string; id: string }[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(markdown)) !== null) {
    const title = m[1].trim().replace(/\*\*/g, "");
    const id = generateSlug(title);
    if (id) out.push({ title, id });
  }
  return out;
};

const text = (node: any): string =>
  !node ? "" : node.type === "text" ? node.value : node.children ? node.children.map(text).join("") : "";

const addClass = (node: any, cls?: string) => {
  if (cls && !node.properties.className) node.properties.className = cls.split(" ");
};

const STYLES: Record<string, string> = {
  h2: "text-2xl font-bold mt-8 mb-4 scroll-mt-28 text-black",
  h3: "text-xl font-semibold mt-6 mb-3 scroll-mt-28 text-black",
  p: "text-lg leading-8 my-4 text-black",
  a: "text-[#7147E8] underline",
  ul: "list-disc pl-6 my-4 space-y-2 text-lg",
  ol: "list-decimal pl-6 my-4 space-y-2 text-lg",
  li: "pl-1",
  th: "border-2 p-3",
  td: "border-2 p-3",
  table: "w-full",
  img: "max-h-[500px] w-auto h-auto block mx-auto rounded-lg my-4",
};

const applyStyles = () => (tree: any) => {
  visit(tree, "element", (node: any, index: number | undefined, parent: any) => {
    const tag = node.tagName;
    if (tag === "h2" || tag === "h3") {
      node.properties.id = generateSlug(text(node));
      addClass(node, STYLES[tag]);
    } else if (["p", "a", "ul", "ol", "li", "th", "td", "img"].includes(tag)) {
      addClass(node, STYLES[tag]);
      if (tag === "img") node.properties.loading = "lazy";
    } else if (tag === "table") {
      addClass(node, STYLES.table);
      if (parent && typeof index === "number") {
        parent.children[index] = {
          type: "element",
          tagName: "div",
          properties: { className: ["overflow-x-scroll", "min-w-[320px]"] },
          children: [node],
        };
      }
    }
  });
};

export const renderBlogMarkdown = (markdown: string): string =>
  String(
    unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(applyStyles)
      .use(rehypeStringify, { allowDangerousHtml: true })
      .processSync(preprocessMarkdown(markdown))
  );
