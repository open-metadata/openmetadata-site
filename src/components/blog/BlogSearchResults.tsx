import { useEffect, useRef, useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import Loader from "@/components/blog/Loader";
import Pagination from "@/components/blog/Pagination";
import { POST_COUNT_PER_PAGE } from "@/constants/blog.constants";
import { HashnodePostNode } from "@/lib/hashnode";

interface Props {
  query: string;
  isSearching: boolean;
  results: HashnodePostNode[];
}

const BlogSearchResults = ({ query, isSearching, results }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [results]);

  if (isSearching) {
    return (
      <div className="mt-10 text-center text-gray-500">
        <Loader />
      </div>
    );
  }

  const totalPages = Math.ceil(results.length / POST_COUNT_PER_PAGE);
  const pageResults = results.slice(
    (currentPage - 1) * POST_COUNT_PER_PAGE,
    currentPage * POST_COUNT_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={topRef} className="scroll-mt-6">
      <p className="text-gray-600" aria-live="polite">
        {results.length === 0
          ? `No posts match “${query}”.`
          : `${results.length} ${results.length === 1 ? "post matches" : "posts match"} “${query}”`}
      </p>
      {pageResults.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 w-full">
          {pageResults.map((post) => (
            <BlogCard post={post} key={post.id} />
          ))}
        </div>
      )}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default BlogSearchResults;
