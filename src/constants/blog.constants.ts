// Hashnode publication that backs /blog (same pattern as getcollate).
export const HASHNODE_API_URL = "https://gql-beta.hashnode.com/";

export const HASHNODE_PUBLICATION_HOST =
  process.env.HASHNODE_PUBLICATION_HOST || "open-metadata.hashnode.dev";

export const BLOG_TITLE = "OpenMetadata Blog";

export const BLOG_POSTS_PER_PAGE = 6;

export const HASHNODE_MAX_PAGE_SIZE = 50;

// Slugs pinned to the Featured block, in order. Missing slugs are skipped.
// The last slot is always the newest post that isn't pinned.
export const BLOG_FEATURED_SLUGS: string[] = [
  "announcing-openmetadata-2-1-your-business-definitions-in-the-context-graph",
  "announcing-openmetadata-2-0-the-open-context-layer-for-ai-agents",
  "the-enterprise-ai-moat-isn-t-the-model-context-has-to-outlive-it",
];

export const POPULAR_TAG_COUNT = 8;

// Tag labels that title-casing the slug gets wrong.
export const BLOG_TAG_LABEL_OVERRIDES: Record<string, string> = {
  ai: "AI",
  bi: "BI",
  etl: "ETL",
  genai: "GenAI",
  llm: "LLM",
  mcp: "MCP",
  openmetadata: "OpenMetadata",
  opensource: "Open Source",
  rag: "RAG",
  rdf: "RDF",
  scim: "SCIM",
  sdk: "SDK",
  sql: "SQL",
};
