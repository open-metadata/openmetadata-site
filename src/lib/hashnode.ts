import {
  BLOG_FEATURED_SLUGS,
  BLOG_TAG_LABEL_OVERRIDES,
  HASHNODE_API_URL,
  HASHNODE_FEATURED_POSTS_QUERY,
  HASHNODE_MAX_PAGE_SIZE,
  HASHNODE_POST_TAGS_QUERY,
  HASHNODE_SERIES_LIST,
  HASHNODE_SERIES_POST_IDS_QUERY,
  getHashnodePostDetailsQuery,
} from "@/constants/blog.constants";

export interface HashnodeCover {
  url: string;
}

export interface HashnodeSeries {
  id?: string;
  name: string;
  slug?: string;
}

export interface HashnodeTag {
  name?: string;
  slug: string;
}

export interface HashnodePostNode {
  id: string;
  title: string;
  brief?: string;
  slug: string;
  publishedAt?: string;
  updatedAt?: string;
  url?: string;
  coverImage?: HashnodeCover | null;
  series?: HashnodeSeries | null;
  tags?: HashnodeTag[];
  reactionCount?: number;
  replyCount?: number;
}

export interface FeaturedItem {
  id: string;
  href: string;
  image: string;
  title: string;
  tag: string | null;
  cta: string;
}

export interface BlogTag {
  slug: string;
  name: string;
  count: number;
}

export interface SeriesNode {
  id: string;
  name: string;
  slug: string;
}

export interface BlogPostDetails {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  readTimeInMinutes: number | null;
  coverImage: string | null;
  markdown: string;
  contentHtml?: string;
  author: { name: string; profilePicture: string | null } | null;
  tags: { name: string; slug: string }[];
  seo: { title: string | null; description: string | null } | null;
  series: { name: string; slug: string } | null;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const fetchWithRetry = async (url: string, options: RequestInit, retries = 3): Promise<any> => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Hashnode API error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      if (attempt === retries) throw error;
      await sleep(300 * attempt);
    }
  }
};

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "User-Agent": "openmetadata-site-blog/1.0",
};

export const getPosts = async (query: string, variables: Record<string, unknown> = {}) =>
  fetchWithRetry(HASHNODE_API_URL, {
    method: "POST",
    cache: "no-store",
    headers: defaultHeaders,
    body: JSON.stringify({ query, variables }),
  });

export const getPostDetails = async (query: string) => {
  const url = `${HASHNODE_API_URL}?_t=${Date.now()}`;
  return fetchWithRetry(url, {
    method: "POST",
    cache: "no-store",
    headers: defaultHeaders,
    body: JSON.stringify({ query }),
  });
};

export const getSeriesList = async (query: string, variables: Record<string, unknown> = {}) =>
  fetchWithRetry(HASHNODE_API_URL, {
    method: "POST",
    cache: "no-store",
    headers: defaultHeaders,
    body: JSON.stringify({ query, variables }),
  });

export const getSeriesPosts = async (query: string, variables: Record<string, unknown> = {}) =>
  fetchWithRetry(HASHNODE_API_URL, {
    method: "POST",
    cache: "no-store",
    headers: defaultHeaders,
    body: JSON.stringify({ query, variables }),
  });

export const tagSlugToLabel = (slug: string): string => {
  if (!slug) return "";
  if (BLOG_TAG_LABEL_OVERRIDES[slug]) return BLOG_TAG_LABEL_OVERRIDES[slug];
  return slug
    .split("-")
    .map(
      (word) =>
        BLOG_TAG_LABEL_OVERRIDES[word] || word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
};

const toFeaturedItem = (post: {
  id: string;
  slug: string;
  title: string;
  coverImage: { url: string };
  series?: { name?: string } | null;
}): FeaturedItem => ({
  id: post.id,
  href: `/blog/${post.slug}`,
  image: post.coverImage.url,
  title: post.title,
  tag: post.series?.name || null,
  cta: "Read more",
});

// Pinned posts first, then the newest post that isn't pinned.
// boundaryCursor/skipCount tell the main grid where to start.
export const getFeaturedBlogPosts = async () => {
  const res = await getPosts(HASHNODE_FEATURED_POSTS_QUERY(), {});
  const publication = res?.data?.publication || {};

  const pinned = BLOG_FEATURED_SLUGS.map((_, i) => publication[`pinned${i}`])
    .filter(Boolean)
    .filter((post: any) => post.coverImage?.url);
  const pinnedIds = new Set(pinned.map((post: any) => post.id));

  const edges = publication.posts?.edges || [];
  const latestIndex = edges.findIndex(
    (edge: any) => !pinnedIds.has(edge.node.id) && edge.node.coverImage?.url
  );
  const latestEdge = latestIndex === -1 ? null : edges[latestIndex];

  const posts = latestEdge ? [...pinned, latestEdge.node] : pinned;

  return {
    featuredPosts: posts.map(toFeaturedItem),
    boundaryCursor: latestEdge?.cursor || null,
    skipCount: latestIndex === -1 ? 0 : latestIndex + 1,
  };
};

const TAG_CACHE_TTL_MS = 5 * 60 * 1000;
let tagCache: { tags: BlogTag[]; expiresAt: number } | null = null;

export const getBlogTags = async (): Promise<BlogTag[]> => {
  if (tagCache && tagCache.expiresAt > Date.now()) return tagCache.tags;

  const counts: Record<string, number> = {};
  let after: string | null = null;

  do {
    const res = await getPosts(HASHNODE_POST_TAGS_QUERY(), {
      first: HASHNODE_MAX_PAGE_SIZE,
      after,
    });
    const posts = res?.data?.publication?.posts;
    if (!posts) throw new Error("Hashnode returned no posts for tags");

    posts.edges.forEach((edge: any) =>
      edge.node.tags?.forEach(({ slug }: { slug: string }) => {
        counts[slug] = (counts[slug] || 0) + 1;
      })
    );
    after = posts.pageInfo.hasNextPage ? posts.pageInfo.endCursor : null;
  } while (after);

  const tags = Object.entries(counts)
    .map(([slug, count]) => ({ slug, name: tagSlugToLabel(slug), count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  tagCache = { tags, expiresAt: Date.now() + TAG_CACHE_TTL_MS };
  return tags;
};

export const getSeriesPostCount = async (seriesSlug: string): Promise<number> => {
  let count = 0;
  let after: string | null = null;

  do {
    const res = await getPosts(HASHNODE_SERIES_POST_IDS_QUERY(), {
      seriesSlug,
      first: HASHNODE_MAX_PAGE_SIZE,
      after,
    });
    const posts = res?.data?.publication?.series?.posts;
    if (!posts) break;

    count += posts.edges.length;
    after = posts.pageInfo.hasNextPage ? posts.pageInfo.endCursor : null;
  } while (after);

  return count;
};

export const getBlogFilters = async () => {
  const [initialSeries, blogTags] = await Promise.all([
    getSeriesList(HASHNODE_SERIES_LIST(), { first: 6 })
      .then(
        (res) =>
          res?.data?.publication?.seriesList?.edges?.map((edge: any) => edge.node as SeriesNode) ||
          []
      )
      .catch((error) => {
        console.error("Error fetching blog series:", error);
        return [] as SeriesNode[];
      }),
    getBlogTags().catch((error) => {
      console.error("Error fetching blog tags:", error);
      return [] as BlogTag[];
    }),
  ]);
  return { initialSeries, blogTags };
};

export const getPostBySlug = async (slug: string): Promise<BlogPostDetails | null> => {
  const res = await getPostDetails(getHashnodePostDetailsQuery(slug));
  const post = res?.data?.publication?.post;
  if (!post) return null;
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    publishedAt: post.publishedAt,
    readTimeInMinutes: post.readTimeInMinutes ?? null,
    coverImage: post.coverImage?.url ?? null,
    markdown: post.content?.markdown ?? "",
    author: post.author
      ? { name: post.author.name, profilePicture: post.author.profilePicture ?? null }
      : null,
    tags: post.tags || [],
    seo: post.seo ? { title: post.seo.title ?? null, description: post.seo.description ?? null } : null,
    series: post.series ? { name: post.series.name, slug: post.series.slug } : null,
  };
};
