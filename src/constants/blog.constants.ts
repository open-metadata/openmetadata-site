// Hashnode publication that backs /blog (same pattern as getcollate).
export const HASHNODE_API_URL = "https://gql-beta.hashnode.com/";

export const HASHNODE_PUBLICATION_HOST =
  process.env.HASHNODE_PUBLICATION_HOST || "open-metadata.hashnode.dev";

export const HASHNODE_PUBLICATION_ID =
  process.env.HASHNODE_PUBLICATION_ID || "6b074fae218433dc2fcd383f";

export const BLOG_SITE_HOST = process.env.HOST_NAME || "https://www.open-metadata.org";

export const BLOG_TITLE = "OpenMetadata Blog";

export const POST_COUNT_PER_PAGE = 6;
/** @deprecated use POST_COUNT_PER_PAGE — kept for older imports */
export const BLOG_POSTS_PER_PAGE = POST_COUNT_PER_PAGE;

export const BLOG_POSTS_GRID_ID = "blog-posts";

export const HASHNODE_MAX_PAGE_SIZE = 50;

export const POPULAR_TAG_COUNT = 8;

export const BLOG_SEARCH_MIN_LENGTH = 2;

// Slugs pinned to the Featured block, in order. Missing slugs are skipped.
// Keep at 2 — getFeaturedBlogPosts appends the newest unpinned post as the 3rd
// slot (1 lead + 2 stacked), matching getcollate.
export const BLOG_FEATURED_SLUGS: string[] = [
  "announcing-openmetadata-2-1-your-business-definitions-in-the-context-graph",
  "announcing-openmetadata-2-0-the-open-context-layer-for-ai-agents",
];

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

export const HASHNODE_POST_QUERY = () => `
query Publication_${Date.now()}($after: String, $first: Int!) {
  publication(host: "${HASHNODE_PUBLICATION_HOST}") {
    posts(first: $first, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          url
          title
          brief
          slug
          publishedAt
          updatedAt
          coverImage {
            url
          }
          reactionCount
          replyCount
          series {
            id
            name
            slug
          }
          tags {
            slug
          }
        }
      }
    }
  }
}
`;

const FEATURED_POST_FIELDS = `
  id
  title
  slug
  coverImage {
    url
  }
  series {
    name
  }
`;

export const HASHNODE_FEATURED_POSTS_QUERY = () => `
query FeaturedPosts_${Date.now()} {
  publication(host: "${HASHNODE_PUBLICATION_HOST}") {
    ${BLOG_FEATURED_SLUGS.map(
      (slug, i) => `pinned${i}: post(slug: "${slug}") {${FEATURED_POST_FIELDS}}`
    ).join("\n    ")}
    posts(first: ${BLOG_FEATURED_SLUGS.length + 1}) {
      edges {
        cursor
        node {${FEATURED_POST_FIELDS}}
      }
    }
  }
}
`;

export const getHashnodePostDetailsQuery = (postSlug: string) => `
query PostDetails_${Date.now()} {
  publication(host: "${HASHNODE_PUBLICATION_HOST}") {
    post(slug: "${postSlug}") {
      id
      title
      slug
      author {
        name
        profilePicture
      }
      publishedAt
      readTimeInMinutes
      coverImage {
        url
      }
      content {
        markdown
      }
      tags {
        name
        slug
      }
      seo {
        title
        description
      }
      series {
        name
        slug
      }
    }
  }
}
`;

export const HASHNODE_POST_BY_TAG_QUERY = () => `
query Publication_${Date.now()}($after: String, $first: Int!, $tagSlugs: [String!]!) {
  publication(host: "${HASHNODE_PUBLICATION_HOST}") {
    posts(first: $first, after: $after, filter: { tagSlugs: $tagSlugs }) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          url
          title
          brief
          slug
          publishedAt
          updatedAt
          coverImage {
            url
          }
          reactionCount
          replyCount
          series {
            id
            name
            slug
          }
          tags {
            slug
          }
        }
      }
    }
  }
}
`;

export const HASHNODE_POST_TAGS_QUERY = () => `
query PostTags_${Date.now()}($after: String, $first: Int!) {
  publication(host: "${HASHNODE_PUBLICATION_HOST}") {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          tags {
            slug
          }
        }
      }
    }
  }
}
`;

export const HASHNODE_SEARCH_POSTS_QUERY = () => `
query SearchPosts_${Date.now()}($first: Int!, $after: String, $query: String!) {
  searchPostsOfPublication(
    first: $first
    after: $after
    filter: { publicationId: "${HASHNODE_PUBLICATION_ID}", query: $query }
  ) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        title
        brief
        slug
        publishedAt
        coverImage {
          url
        }
        series {
          id
          name
          slug
        }
        tags {
          slug
        }
      }
    }
  }
}
`;

export const HASHNODE_SERIES_LIST = () => `
query SeriesList_${Date.now()}($first: Int!) {
  publication(host: "${HASHNODE_PUBLICATION_HOST}") {
    seriesList(first: $first) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
}
`;

export const HASHNODE_SERIES_POST_IDS_QUERY = () => `
query SeriesPostIds_${Date.now()}($after: String, $first: Int!, $seriesSlug: String!) {
  publication(host: "${HASHNODE_PUBLICATION_HOST}") {
    series(slug: $seriesSlug) {
      posts(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            id
          }
        }
      }
    }
  }
}
`;

export const HASHNODE_SERIES_POSTS_QUERY = () => `
query PublicationSeries_${Date.now()}($after: String, $first: Int!, $seriesSlug: String!) {
  publication(host: "${HASHNODE_PUBLICATION_HOST}") {
    series(slug: $seriesSlug) {
      name
      posts(first: $first, after: $after) {
        totalDocuments
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          cursor
          node {
            id
            url
            title
            brief
            slug
            publishedAt
            updatedAt
            coverImage {
              url
            }
            reactionCount
            replyCount
            series {
              id
              name
              slug
            }
            tags {
              slug
            }
          }
        }
      }
    }
  }
}
`;
