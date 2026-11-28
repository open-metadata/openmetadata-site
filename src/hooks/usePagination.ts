import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  BLOG_POSTS_GRID_ID,
  HASHNODE_MAX_PAGE_SIZE,
  POST_COUNT_PER_PAGE,
} from "@/constants/blog.constants";
import { HashnodePostNode, SeriesNode } from "@/lib/hashnode";

let pendingGridHeight: number | null = null;

type QueryName = "posts" | "postsByTag" | "seriesPosts";

interface BoundaryContext {
  globalBoundaryCursor?: string | null;
  skipCount?: number;
}

export const usePagination = (
  queryName: QueryName,
  variables: Record<string, unknown>,
  initialPage = 1,
  selectedSeries: SeriesNode | null = null,
  initialPosts: HashnodePostNode[] = [],
  initialTotalPosts = 0,
  boundaryContext: BoundaryContext | null = null
) => {
  const router = useRouter();
  const [posts, setPosts] = useState<HashnodePostNode[]>(initialPosts);
  const [isFetching, setIsFetching] = useState(false);
  const [totalPosts, setTotalPosts] = useState(initialTotalPosts);
  const [gridMinHeight, setGridMinHeight] = useState<number | null>(() => pendingGridHeight);

  const globalBoundaryCursor = boundaryContext?.globalBoundaryCursor || null;
  const isSeriesQuery = queryName === "seriesPosts";
  const boundarySkipCount = queryName === "posts" ? boundaryContext?.skipCount ?? 0 : 0;
  const effectiveBoundaryCursor = queryName === "posts" ? globalBoundaryCursor : null;

  const currentPage = (() => {
    const isTagPage = router.asPath.includes("/blog/tag/");
    if (isTagPage) {
      const pathParts = router.asPath.split("/");
      const pageIndex = pathParts.findIndex((part) => part === "page");
      if (pageIndex !== -1 && pathParts[pageIndex + 1]) {
        const pageNum = parseInt(pathParts[pageIndex + 1], 10);
        return Number.isNaN(pageNum) ? initialPage : pageNum;
      }
      return initialPage;
    }
    return router.query.page ? parseInt(String(router.query.page), 10) : initialPage;
  })();

  const fetchConnection = async (after: string | null, first: number) => {
    const response = await fetch(`/api/blog/${queryName}`, {
      method: "POST",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ variables: { ...variables, after, first } }),
    });
    const { data } = await response.json();
    return isSeriesQuery ? data?.publication?.series?.posts : data?.publication?.posts;
  };

  const fetchPosts = async (after: string | null) => {
    try {
      setIsFetching(true);
      const postsData = await fetchConnection(after, POST_COUNT_PER_PAGE);
      if (!postsData?.edges) {
        console.error("Error fetching posts: invalid or empty API response");
        return;
      }
      setPosts(postsData.edges.map((e: { node: HashnodePostNode }) => e.node));
      if (postsData.totalDocuments != null) {
        setTotalPosts(Math.max(postsData.totalDocuments - boundarySkipCount, 0));
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setIsFetching(false);
    }
  };

  const getCursorForPage = async (targetPage: number) => {
    let cursor: string | null = effectiveBoundaryCursor;
    let remaining = (targetPage - 1) * POST_COUNT_PER_PAGE;

    while (remaining > 0) {
      const first = Math.min(remaining, HASHNODE_MAX_PAGE_SIZE);
      const postsData = await fetchConnection(cursor, first);
      if (!postsData?.pageInfo?.endCursor) break;
      cursor = postsData.pageInfo.endCursor;
      remaining -= first;
    }

    return cursor;
  };

  const hasServerPage = currentPage === initialPage && initialPosts.length > 0;

  useEffect(() => {
    if (hasServerPage) {
      setPosts(initialPosts);
      setTotalPosts(initialTotalPosts);
    }
  }, [initialPosts, initialTotalPosts, hasServerPage]);

  const finishPageChange = () => {
    pendingGridHeight = null;
    setGridMinHeight(null);
  };

  useEffect(() => {
    const loadPage = async () => {
      try {
        if (hasServerPage) return;
        await fetchPosts(await getCursorForPage(currentPage));
      } catch (err) {
        console.error("Error loading page:", err);
      } finally {
        finishPageChange();
      }
    };

    if (router.isReady) {
      loadPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentPage,
    router.isReady,
    queryName,
    JSON.stringify(variables),
    effectiveBoundaryCursor,
    selectedSeries?.slug,
  ]);

  const handlePageChange = (newPage: number) => {
    const isTagPage = router.asPath.includes("/blog/tag/");
    const slug = router.query.slug;
    const seriesSlug = selectedSeries?.slug;

    const basePath =
      isTagPage && slug
        ? `/blog/tag/${slug}`
        : seriesSlug
          ? `/blog/series/${seriesSlug}`
          : "/blog";
    const href = newPage === 1 ? basePath : `${basePath}/page/${newPage}`;

    const grid = document.getElementById(BLOG_POSTS_GRID_ID);
    pendingGridHeight = grid?.offsetHeight || 0;
    setGridMinHeight(pendingGridHeight);
    grid?.scrollIntoView({ behavior: "smooth", block: "start" });

    router
      .push(href, undefined, { scroll: false })
      .then((didNavigate) => {
        if (!didNavigate) finishPageChange();
      })
      .catch(finishPageChange);
  };

  const totalPages = Math.ceil(totalPosts / POST_COUNT_PER_PAGE);

  return {
    posts,
    isFetching: isFetching || gridMinHeight !== null,
    gridMinHeight,
    totalPosts,
    currentPage,
    totalPages,
    handlePageChange,
  };
};
