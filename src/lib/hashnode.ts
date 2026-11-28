import {
  BLOG_FEATURED_SLUGS,
  BLOG_TAG_LABEL_OVERRIDES,
  HASHNODE_API_URL,
  HASHNODE_MAX_PAGE_SIZE,
  HASHNODE_PUBLICATION_HOST,
} from "@/constants/blog.constants";

export interface BlogPostSummary {
  id: string;
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  coverImage: string | null;
  seriesName: string | null;
  seriesSlug: string | null;
  tags: string[];
}

export interface BlogPostDetails {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  readTimeInMinutes: number | null;
  coverImage: string | null;
  markdown: string;
  author: { name: string; profilePicture: string | null } | null;
  tags: { name: string; slug: string }[];
  seoTitle: string | null;
  seoDescription: string | null;
  seriesName: string | null;
  seriesSlug: string | null;
}

export interface BlogFilterOption {
  slug: string;
  name: string;
  count: number;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const gql = async <T>(query: string, variables: Record<string, unknown> = {}, retries = 3): Promise<T> => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(HASHNODE_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "openmetadata-site-blog/1.0",
        },
        body: JSON.stringify({ query, variables }),
      });
      if (!res.ok) throw new Error(`Hashnode API error: ${res.status}`);
      const json = await res.json();
      if (json.errors) throw new Error(JSON.stringify(json.errors).slice(0, 300));
      return json.data as T;
    } catch (err) {
      if (attempt === retries) throw err;
      await sleep(300 * attempt);
    }
  }
  throw new Error("unreachable");
};

const POSTS_QUERY = `
query Posts($first: Int!, $after: String) {
  publication(host: "${HASHNODE_PUBLICATION_HOST}") {
    posts(first: $first, after: $after) {
      pageInfo { hasNextPage endCursor }
      edges { node {
        id title brief slug publishedAt
        coverImage { url }
        series { name slug }
        tags { slug }
      } }
    }
  }
}`;

const POST_QUERY = `
query Post($slug: String!) {
  publication(host: "${HASHNODE_PUBLICATION_HOST}") {
    post(slug: $slug) {
      id title slug publishedAt readTimeInMinutes
      author { name profilePicture }
      coverImage { url }
      content { markdown }
      tags { name slug }
      seo { title description }
      series { name slug }
    }
  }
}`;

export const tagSlugToLabel = (slug: string): string => {
  if (!slug) return "";
  if (BLOG_TAG_LABEL_OVERRIDES[slug]) return BLOG_TAG_LABEL_OVERRIDES[slug];
  return slug
    .split("-")
    .map((w) => BLOG_TAG_LABEL_OVERRIDES[w] || w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
};

// Every post (summary fields only), newest first. Walks Hashnode's cursor pages.
export const getAllPosts = async (): Promise<BlogPostSummary[]> => {
  const posts: BlogPostSummary[] = [];
  let after: string | null = null;
  do {
    const data: any = await gql(POSTS_QUERY, { first: HASHNODE_MAX_PAGE_SIZE, after });
    const conn = data?.publication?.posts;
    if (!conn) throw new Error("Hashnode returned no posts");
    for (const { node } of conn.edges) {
      posts.push({
        id: node.id,
        title: node.title,
        brief: node.brief || "",
        slug: node.slug,
        publishedAt: node.publishedAt,
        coverImage: node.coverImage?.url ?? null,
        seriesName: node.series?.name ?? null,
        seriesSlug: node.series?.slug ?? null,
        tags: (node.tags || []).map((t: { slug: string }) => t.slug),
      });
    }
    after = conn.pageInfo.hasNextPage ? conn.pageInfo.endCursor : null;
  } while (after);
  return posts;
};

export const getPostBySlug = async (slug: string): Promise<BlogPostDetails | null> => {
  const data: any = await gql(POST_QUERY, { slug });
  const p = data?.publication?.post;
  if (!p) return null;
  return {
    id: p.id,
    title: p.title,
    slug: p.slug,
    publishedAt: p.publishedAt,
    readTimeInMinutes: p.readTimeInMinutes ?? null,
    coverImage: p.coverImage?.url ?? null,
    markdown: p.content?.markdown ?? "",
    author: p.author ? { name: p.author.name, profilePicture: p.author.profilePicture ?? null } : null,
    tags: p.tags || [],
    seoTitle: p.seo?.title ?? null,
    seoDescription: p.seo?.description ?? null,
    seriesName: p.series?.name ?? null,
    seriesSlug: p.series?.slug ?? null,
  };
};

// Pinned posts first, then the newest post that isn't pinned.
export const pickFeatured = (posts: BlogPostSummary[]): BlogPostSummary[] => {
  const pinned = BLOG_FEATURED_SLUGS.map((s) => posts.find((p) => p.slug === s)).filter(
    (p): p is BlogPostSummary => !!p && !!p.coverImage
  );
  const ids = new Set(pinned.map((p) => p.id));
  const latest = posts.find((p) => !ids.has(p.id) && p.coverImage);
  return latest ? [...pinned, latest] : pinned;
};

export const buildTagOptions = (posts: BlogPostSummary[]): BlogFilterOption[] => {
  const counts: Record<string, number> = {};
  posts.forEach((p) => p.tags.forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
  return Object.entries(counts)
    .map(([slug, count]) => ({ slug, name: tagSlugToLabel(slug), count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
};

export const buildSeriesOptions = (posts: BlogPostSummary[]): BlogFilterOption[] => {
  const map: Record<string, BlogFilterOption> = {};
  posts.forEach((p) => {
    if (!p.seriesSlug || !p.seriesName) return;
    map[p.seriesSlug] = map[p.seriesSlug] || { slug: p.seriesSlug, name: p.seriesName, count: 0 };
    map[p.seriesSlug].count++;
  });
  return Object.values(map).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
};
