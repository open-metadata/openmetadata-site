import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import ParamLink from "@/components/ParamLink";
import TopicDropdown from "@/components/blog/TopicDropdown";
import { POPULAR_TAG_COUNT } from "@/constants/blog.constants";
import { BlogTag, SeriesNode } from "@/lib/hashnode";

interface SearchState {
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  query: string;
}

interface Props {
  series: SeriesNode[];
  tags: BlogTag[];
  selectedSeries: SeriesNode | null;
  selectedTag: string | null;
  search: SearchState;
}

const BlogFilters = ({ series, tags, selectedSeries, selectedTag, search }: Props) => {
  const router = useRouter();
  const [showAllTags, setShowAllTags] = useState(false);

  const hasFilters = Boolean(selectedSeries || selectedTag || search.query);

  const withSearch = (path: string) =>
    search.query ? `${path}?q=${encodeURIComponent(search.query)}` : path;

  const popularTags = tags.slice(0, POPULAR_TAG_COUNT);
  const activeTag = tags.find((tag) => tag.slug === selectedTag);
  const visibleTags = showAllTags
    ? tags
    : activeTag && !popularTags.includes(activeTag)
      ? [...popularTags, activeTag]
      : popularTags;

  const clearFilters = () => {
    search.setSearchTerm("");
    if (selectedSeries || selectedTag) router.push("/blog");
  };

  return (
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
              className="w-full border border-gray-400 rounded-[6px] bg-white px-4 py-3 pr-11 text-base outline-none placeholder-gray-400 focus:border-gray-600 text-black"
              placeholder="Enter Keywords"
              value={search.searchTerm}
              onChange={(e) => search.setSearchTerm(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex pointer-events-none">
              <Image src="/assets/customer-gallery/search.svg" alt="" width={18} height={18} />
            </div>
          </div>
        </div>
        {series.length > 0 && (
          <div className="md:w-[340px]">
            <TopicDropdown
              series={series}
              selectedSeries={selectedSeries}
              onSelect={(item) =>
                router.push(withSearch(item ? `/blog/series/${item.slug}` : "/blog"))
              }
            />
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
          {visibleTags.map((tag) => {
            const isActive = tag.slug === selectedTag;
            return (
              <ParamLink
                key={tag.slug}
                href={withSearch(isActive ? "/blog" : `/blog/tag/${tag.slug}`)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 transition-colors ${
                  isActive
                    ? "border-[#7147E8] bg-[#f2edfd] text-[#7147E8]"
                    : "border-gray-400 bg-white text-gray-700 hover:border-gray-600"
                }`}
              >
                {tag.name}
                <span className={`text-sm ${isActive ? "text-[#7147E8]" : "text-gray-600"}`}>
                  {tag.count}
                </span>
              </ParamLink>
            );
          })}
          {tags.length > POPULAR_TAG_COUNT && (
            <button
              type="button"
              onClick={() => setShowAllTags((prev) => !prev)}
              className="ml-1 text-gray-600 hover:text-gray-700"
            >
              {showAllTags ? "← Show fewer tags" : "View all tags →"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogFilters;
