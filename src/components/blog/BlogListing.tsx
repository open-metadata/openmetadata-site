import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ParamLink from "@/components/ParamLink";
import BlogCard from "@/components/blog/BlogCard";
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

const pill = (active: boolean) =>
  `px-4 py-2 rounded-full border text-sm whitespace-nowrap ${
    active ? "bg-[#7147E8] border-[#7147E8] text-white" : "bg-white border-gray-300 text-black hover:border-[#7147E8]"
  }`;

const BlogListing = ({ posts, featured, tags, series, selectedTag, selectedSeries, title }: Props) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [showAllTags, setShowAllTags] = useState(false);

  const searching = query.trim().length >= 2;
  const filtered = useMemo(() => {
    if (!searching) return posts;
    const q = query.trim().toLowerCase();
    return posts.filter((p) => p.title.toLowerCase().includes(q) || p.brief.toLowerCase().includes(q));
  }, [posts, query, searching]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / BLOG_POSTS_PER_PAGE));
  const visible = filtered.slice((page - 1) * BLOG_POSTS_PER_PAGE, page * BLOG_POSTS_PER_PAGE);
  const pages = getPageNumbers(page, totalPages);
  const shownTags = showAllTags ? tags : tags.slice(0, POPULAR_TAG_COUNT);

  const goPage = (n: number) => {
    setPage(n);
    document.getElementById("blog-posts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="bg-gradient-to-t from-[#f2edfd] to-white mt-9 md:mt-16">
        <div className="py-24 px-6 md:px-10 xl:px-24 text-black max-w-[1440px] mx-auto">
          <h1 className="text-[52px] tracking-[-0.01em]">Blog</h1>
          <div className="text-lg mt-2 max-w-[48%] min-w-[280px]">
            News, releases, and ideas from the OpenMetadata community on metadata, data governance, and AI context.
          </div>
        </div>

        {featured.length > 0 && !selectedTag && !selectedSeries && (
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 xl:px-16 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.map((f) => (
                <ParamLink
                  key={f.id}
                  href={`/blog/${f.slug}`}
                  className="learning-center-card relative block rounded-[10px] overflow-hidden aspect-[4/3] bg-black"
                >
                  {f.coverImage && <Image src={f.coverImage} alt={f.title} fill className="object-cover opacity-70" />}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    {f.seriesName && <div className="text-sm text-white/80 mb-1">{f.seriesName}</div>}
                    <div className="text-white text-xl font-medium leading-tight">{f.title}</div>
                  </div>
                </ParamLink>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 xl:px-16 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search the blog"
            aria-label="Search the blog"
            className="w-full md:w-80 border border-gray-300 rounded-[6px] px-4 py-2 text-black"
          />
          {series.length > 0 && (
            <select
              aria-label="Filter by series"
              value={selectedSeries ?? ""}
              onChange={(e) => router.push(e.target.value ? `/blog/series/${e.target.value}` : "/blog")}
              className="border border-gray-300 rounded-[6px] px-4 py-2 text-black bg-white"
            >
              <option value="">All series</option>
              {series.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name} ({s.count})
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          <ParamLink href="/blog" className={pill(!selectedTag && !selectedSeries)}>
            All
          </ParamLink>
          {shownTags.map((t) => (
            <ParamLink key={t.slug} href={`/blog/tag/${t.slug}`} className={pill(selectedTag === t.slug)}>
              {t.name}
            </ParamLink>
          ))}
          {tags.length > POPULAR_TAG_COUNT && (
            <button className="text-[#7147E8] underline text-sm" onClick={() => setShowAllTags(!showAllTags)}>
              {showAllTags ? "Show fewer" : "View all tags"}
            </button>
          )}
        </div>

        <h2 id="blog-posts" className="text-3xl text-black font-medium mt-10 scroll-mt-28">
          {searching ? `Search results for “${query.trim()}”` : title}
        </h2>

        {visible.length === 0 ? (
          <div className="text-center text-2xl font-medium text-black py-16">No posts found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
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
