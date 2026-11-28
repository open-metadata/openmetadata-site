import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ParamLink from "@/components/ParamLink";
import BlogCard from "@/components/blog/BlogCard";
import FeaturedArticles from "@/components/blog/FeaturedArticles";
import { BlogFilterOption, BlogPostSummary } from "@/lib/hashnode";
import { BLOG_POSTS_PER_PAGE, POPULAR_TAG_COUNT } from "@/constants/blog.constants";
import { getPageNumbers } from "@/utils/paginationUtils";

interface Props {
  posts: BlogPostSummary[];
  featured: BlogPostSummary[];
  tags: BlogFilterOption[];
  series: BlogFilterOption[];
  selectedTag?: string | null;
  selectedSeries?: string | null;
  title: string;
}

const BlogListing = ({ posts, featured, tags, series, selectedTag, selectedSeries, title }: Props) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [showAllTags, setShowAllTags] = useState(false);

  const searching = query.trim().length >= 2;
  const featuredIds = useMemo(() => new Set(featured.map((f) => f.id)), [featured]);

  const filtered = useMemo(() => {
    let list = posts;
    // On the main index, keep featured out of the paginated grid (Collate behavior).
    if (!selectedTag && !selectedSeries && !searching) {
      list = list.filter((p) => !featuredIds.has(p.id));
    }
    if (!searching) return list;
    const q = query.trim().toLowerCase();
    return list.filter((p) => p.title.toLowerCase().includes(q) || p.brief.toLowerCase().includes(q));
  }, [posts, query, searching, selectedTag, selectedSeries, featuredIds]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / BLOG_POSTS_PER_PAGE));
  const visible = filtered.slice((page - 1) * BLOG_POSTS_PER_PAGE, page * BLOG_POSTS_PER_PAGE);
  const pages = getPageNumbers(page, totalPages);

  const popularTags = tags.slice(0, POPULAR_TAG_COUNT);
  const activeTag = tags.find((t) => t.slug === selectedTag);
  const shownTags =
    showAllTags
      ? tags
      : activeTag && !popularTags.some((t) => t.slug === activeTag.slug)
        ? [...popularTags, activeTag]
        : popularTags;

  const hasFilters = Boolean(selectedSeries || selectedTag || searching);

  const goPage = (n: number) => {
    setPage(n);
    document.getElementById("blog-posts")?.scrollIntoView({ behavior: "smooth" });
  };

  const clearFilters = () => {
    setQuery("");
    setPage(1);
    if (selectedSeries || selectedTag) router.push("/blog");
  };

  const showFeatured = featured.length > 0 && !selectedTag && !selectedSeries && !searching;

  return (
    <div className="mt-16 md:mt-20">
      {showFeatured && (
        <div className="bg-gradient-to-t from-[#f2edfd] to-white">
          <div className="px-5 py-16 max-w-[1440px] mx-auto md:px-10 xl:px-16">
            <FeaturedArticles items={featured} />
          </div>
        </div>
      )}

      <div className="py-10 px-5 max-w-[1440px] mx-auto md:px-10 xl:px-16 overflow-hidden">
        <div className="border-b border-gray-200 pb-8 mb-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:gap-8">
            <div className="flex-1">
              <label htmlFor="blog-search" className="text-gray-700 mb-2 block">
                Search
              </label>
              <div className="relative">
                <input
                  id="blog-search"
                  type="search"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Enter Keywords"
                  className="w-full border border-gray-400 rounded-[6px] bg-white px-4 py-3 pr-11 text-base outline-none placeholder-gray-400 focus:border-gray-600 text-black"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex pointer-events-none">
                  <Image src="/assets/customer-gallery/search.svg" alt="" width={18} height={18} />
                </div>
              </div>
            </div>

            {series.length > 0 && (
              <div className="md:w-[340px]">
                <label htmlFor="blog-series" className="text-gray-700 mb-2 block">
                  Topic
                </label>
                <select
                  id="blog-series"
                  aria-label="Filter by series"
                  value={selectedSeries ?? ""}
                  onChange={(e) => router.push(e.target.value ? `/blog/series/${e.target.value}` : "/blog")}
                  className="w-full border border-gray-400 rounded-[6px] px-4 py-3 text-black bg-white"
                >
                  <option value="">All series</option>
                  {series.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.name} ({s.count})
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              type="button"
              onClick={clearFilters}
              className={`self-start md:self-auto md:py-3 text-[#7147E8] hover:text-[#5a38c7] whitespace-nowrap ${
                hasFilters ? "" : "invisible"
              }`}
            >
              Clear all filters
            </button>
          </div>

          {tags.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3">
              <span className="text-gray-700 mr-1">{showAllTags ? "All tags" : "Popular tags"}</span>
              {shownTags.map((tag) => {
                const isActive = tag.slug === selectedTag;
                return (
                  <ParamLink
                    key={tag.slug}
                    href={isActive ? "/blog" : `/blog/tag/${tag.slug}`}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 transition-colors ${
                      isActive
                        ? "border-[#7147E8] bg-[#f2edfd] text-[#7147E8]"
                        : "border-gray-400 bg-white text-gray-700 hover:border-gray-600"
                    }`}
                  >
                    {tag.name}
                    <span className={`text-sm ${isActive ? "text-[#7147E8]" : "text-gray-600"}`}>{tag.count}</span>
                  </ParamLink>
                );
              })}
              {tags.length > POPULAR_TAG_COUNT && (
                <button
                  type="button"
                  onClick={() => setShowAllTags((v) => !v)}
                  className="ml-1 text-gray-600 hover:text-gray-700"
                >
                  {showAllTags ? "← Show fewer tags" : "View all tags →"}
                </button>
              )}
            </div>
          )}
        </div>

        <h1 id="blog-posts" className="text-3xl text-black font-medium text-left scroll-mt-28 leading-snug">
          {searching ? `Search results for “${query.trim()}”` : title}
        </h1>

        {visible.length === 0 ? (
          <div className="text-center text-2xl font-medium text-black py-16">No posts found</div>
        ) : (
          <div className="scroll-mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 mt-10 w-full">
            {visible.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-end mt-16">
            <div className="inline-flex items-center bg-white border border-gray-300 rounded-[6px]">
              <button
                className="w-10 h-10 flex items-center justify-center disabled:opacity-40"
                onClick={() => goPage(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
              >
                ‹
              </button>
              <div className="w-px h-6 bg-gray-300" />
              {pages.map((p, i) =>
                typeof p === "number" ? (
                  <button
                    key={p}
                    onClick={() => goPage(p)}
                    className={`w-10 h-10 flex items-center justify-center text-base font-medium ${
                      page === p ? "bg-gray-100 text-[#7147E8]" : "bg-white text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {p}
                  </button>
                ) : (
                  <span key={`e-${i}`} className="w-10 h-10 flex items-center justify-center text-sm text-gray-500">
                    {p}
                  </span>
                )
              )}
              <div className="w-px h-6 bg-gray-300" />
              <button
                className="w-10 h-10 flex items-center justify-center disabled:opacity-40"
                onClick={() => goPage(page + 1)}
                disabled={page === totalPages}
                aria-label="Next page"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogListing;
