import type { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "@/lib/hashnode";
import {
  HASHNODE_POST_BY_TAG_QUERY,
  HASHNODE_POST_QUERY,
  HASHNODE_SEARCH_POSTS_QUERY,
  HASHNODE_SERIES_POSTS_QUERY,
} from "@/constants/blog.constants";

const QUERIES: Record<string, () => string> = {
  posts: HASHNODE_POST_QUERY,
  postsByTag: HASHNODE_POST_BY_TAG_QUERY,
  seriesPosts: HASHNODE_SERIES_POSTS_QUERY,
  searchPosts: HASHNODE_SEARCH_POSTS_QUERY,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const key = typeof req.query.blog === "string" ? req.query.blog : "";
  const buildQuery = QUERIES[key];
  if (!buildQuery) {
    return res.status(400).json({ error: "Invalid blog query" });
  }

  let variables: Record<string, unknown>;
  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    variables = body?.variables;
  } catch {
    return res.status(400).json({ error: "Invalid JSON body" });
  }

  if (!variables || typeof variables !== "object" || Array.isArray(variables)) {
    return res.status(400).json({ error: "Missing required field: variables" });
  }

  try {
    const result = await getPosts(buildQuery(), variables);
    return res.status(200).json(result);
  } catch (error) {
    console.error("blog API error:", error);
    return res.status(502).json({ error: "Upstream Hashnode request failed" });
  }
}
