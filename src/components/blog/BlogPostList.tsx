import BlogCard from "@/components/blog/BlogCard";
import BlogSearchResults from "@/components/blog/BlogSearchResults";
import Loader from "@/components/blog/Loader";
import Pagination from "@/components/blog/Pagination";
import { BLOG_POSTS_GRID_ID } from "@/constants/blog.constants";
import { HashnodePostNode } from "@/lib/hashnode";

interface SearchProps {
  isActive: boolean;
  query: string;
  isSearching: boolean;
  results: HashnodePostNode[];
}

interface PaginationProps {
  posts: HashnodePostNode[];
  isFetching: boolean;
  gridMinHeight: number | null;
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const BlogPostList = ({
  search,
  pagination,
}: {
  search: SearchProps;
  pagination: PaginationProps;
}) => {
  if (search.isActive) {
    return (
      <div className="mt-6">
        <BlogSearchResults {...search} />
      </div>
    );
  }

  const { posts, isFetching, gridMinHeight, currentPage, totalPages, handlePageChange } =
    pagination;

  return (
    <>
      <div
        id={BLOG_POSTS_GRID_ID}
        style={{ minHeight: gridMinHeight ?? undefined }}
        className="scroll-mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 mt-4 w-full"
      >
        {isFetching ? (
          <div className="text-center text-gray-500 col-span-full">
            <Loader />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center text-2xl font-medium text-black py-16 col-span-full">
            No posts found
          </div>
        ) : (
          posts.map((post) => <BlogCard post={post} key={post.id} />)
        )}
      </div>

      {!isFetching && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default BlogPostList;
