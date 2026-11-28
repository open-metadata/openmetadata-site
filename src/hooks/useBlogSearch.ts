import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { BLOG_SEARCH_MIN_LENGTH, HASHNODE_MAX_PAGE_SIZE } from "@/constants/blog.constants";
import { HashnodePostNode } from "@/lib/hashnode";

const DEBOUNCE_MS = 300;

const relevance = (post: HashnodePostNode, term: string) => {
  if (post.title.toLowerCase().includes(term)) return 0;
  if (post.brief?.toLowerCase().includes(term)) return 1;
  return 2;
};

const MAX_SEARCH_PAGES = 10;

const fetchAllMatches = async (query: string): Promise<HashnodePostNode[]> => {
  const matches: HashnodePostNode[] = [];
  let after: string | null = null;

  for (let page = 0; page < MAX_SEARCH_PAGES; page++) {
    const response: Response = await fetch("/api/blog/searchPosts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        variables: { query, first: HASHNODE_MAX_PAGE_SIZE, after },
      }),
    });
    const json: {
      data?: {
        searchPostsOfPublication?: {
          pageInfo: { hasNextPage: boolean; endCursor: string | null };
          edges: { node: HashnodePostNode }[];
        };
      };
    } = await response.json();
    const connection = json.data?.searchPostsOfPublication;
    if (!connection) throw new Error("Invalid search response");

    matches.push(...connection.edges.map((edge) => edge.node));
    if (!connection.pageInfo.hasNextPage) break;
    after = connection.pageInfo.endCursor;
  }

  return matches;
};

const SEARCH_CACHE_TTL_MS = 5 * 60 * 1000;
const SEARCH_CACHE_MAX_ENTRIES = 20;
const searchCache = new Map<string, { promise: Promise<HashnodePostNode[]>; expiresAt: number }>();

const getCachedSearch = (query: string) => {
  const hit = searchCache.get(query.toLowerCase());
  return hit && hit.expiresAt > Date.now() ? hit : null;
};

const getMatches = (query: string) => {
  const cached = getCachedSearch(query);
  if (cached) return cached.promise;

  const key = query.toLowerCase();
  const promise = fetchAllMatches(query).catch((err) => {
    searchCache.delete(key);
    throw err;
  });
  searchCache.set(key, {
    promise,
    expiresAt: Date.now() + SEARCH_CACHE_TTL_MS,
  });
  if (searchCache.size > SEARCH_CACHE_MAX_ENTRIES) {
    searchCache.delete(searchCache.keys().next().value!);
  }
  return promise;
};

export const useBlogSearch = ({
  seriesSlug = null,
  tagSlug = null,
}: { seriesSlug?: string | null; tagSlug?: string | null } = {}) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<HashnodePostNode[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const query = searchTerm.trim();
  const isActive = query.length >= BLOG_SEARCH_MIN_LENGTH;

  useEffect(() => {
    if (router.isReady && typeof router.query.q === "string") {
      setSearchTerm(router.query.q);
    }
  }, [router.isReady]);

  const isNavigating = useRef(false);

  useEffect(() => {
    const handleStart = (_url: string, { shallow }: { shallow: boolean }) => {
      if (!shallow) isNavigating.current = true;
    };
    const handleDone = () => {
      isNavigating.current = false;
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleDone);
    router.events.on("routeChangeError", handleDone);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleDone);
      router.events.off("routeChangeError", handleDone);
    };
  }, [router.events]);

  useEffect(() => {
    if (!router.isReady || (router.query.q || "") === query) return;

    const timer = setTimeout(() => {
      if (isNavigating.current) return;

      const { q: _q, ...rest } = router.query;
      router.replace(
        {
          pathname: router.pathname,
          query: query ? { ...rest, q: query } : rest,
        },
        undefined,
        { shallow: true, scroll: false }
      );
    }, DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [query, router.isReady]);

  useEffect(() => {
    if (!isActive) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    let cancelled = false;
    setIsSearching(true);

    const timer = setTimeout(
      async () => {
        try {
          const matches = await getMatches(query);
          if (cancelled) return;

          const posts = matches
            .filter((post) => post.coverImage?.url)
            .filter((post) => !seriesSlug || post.series?.slug === seriesSlug)
            .filter((post) => !tagSlug || post.tags?.some((tag) => tag.slug === tagSlug));
          const term = query.toLowerCase();
          posts.sort((a, b) => relevance(a, term) - relevance(b, term));

          if (!cancelled) setResults(posts);
        } catch (err) {
          console.error("Error searching posts:", err);
          if (!cancelled) setResults([]);
        } finally {
          if (!cancelled) setIsSearching(false);
        }
      },
      getCachedSearch(query) ? 0 : DEBOUNCE_MS
    );

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [query, isActive, seriesSlug, tagSlug]);

  return { searchTerm, setSearchTerm, query, isActive, isSearching, results };
};
