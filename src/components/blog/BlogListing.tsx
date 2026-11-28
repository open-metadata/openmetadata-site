import FeaturedArticles from "@/components/blog/FeaturedArticles";
import BlogFilters from "@/components/blog/BlogFilters";
import BlogPostList from "@/components/blog/BlogPostList";
import { BlogTag, FeaturedItem, HashnodePostNode, SeriesNode } from "@/lib/hashnode";

interface SearchState {
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  query: string;
  isActive: boolean;
  isSearching: boolean;
  results: HashnodePostNode[];
}

interface PaginationState {
  posts: HashnodePostNode[];
  isFetching: boolean;
  gridMinHeight: number | null;
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

interface Props {
  featuredPosts: FeaturedItem[];
  series: SeriesNode[];
  tags: BlogTag[];
  selectedSeries: SeriesNode | null;
  search: SearchState;
  pagination: PaginationState;
  title: string;
}

const BlogListing = ({
  featuredPosts,
  series,
  tags,
  selectedSeries,
  search,
  pagination,
  title,
}: Props) => (
  <>
    {featuredPosts.length > 0 && (
      <div className="bg-gradient-to-t from-[#f2edfd] to-white">
        <div className="px-5 py-16 max-w-[1440px] mx-auto md:px-10 xl:px-16">
          <FeaturedArticles items={featuredPosts} />
        </div>
      </div>
    )}

    <div className="py-10 px-5 max-w-[1440px] mx-auto md:px-10 xl:px-16 overflow-hidden">
      <BlogFilters
        series={series}
        tags={tags}
        selectedSeries={selectedSeries}
        selectedTag={null}
        search={search}
      />
      <div className="w-full">
        <h1 className="text-3xl text-black font-medium text-left leading-snug">{title}</h1>
        <BlogPostList search={search} pagination={pagination} />
      </div>
    </div>
  </>
);

export default BlogListing;
