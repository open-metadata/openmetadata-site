import { getPageNumbers } from "@/utils/paginationUtils";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  if (totalPages <= 1) return null;

  const pageNumbers = getPageNumbers(currentPage, totalPages);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex justify-end mt-16">
      <div className="inline-flex items-center bg-white border border-gray-300 rounded-[6px]">
        <button
          type="button"
          className="w-10 h-10 flex items-center justify-center disabled:opacity-40 text-black"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirstPage}
          aria-label="Previous page"
        >
          ‹
        </button>
        <div className="w-px h-6 bg-gray-300" />
        {pageNumbers.map((pageNum, index) =>
          typeof pageNum === "number" ? (
            <button
              type="button"
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`w-10 h-10 flex items-center justify-center text-base font-medium ${
                currentPage === pageNum
                  ? "bg-gray-100 text-[#7147E8]"
                  : "bg-white text-gray-500 hover:bg-gray-50"
              }`}
            >
              {pageNum}
            </button>
          ) : (
            <span
              key={`ellipsis-${index}`}
              className="w-10 h-10 flex items-center justify-center bg-white text-sm text-gray-500"
            >
              {pageNum}
            </span>
          )
        )}
        <div className="w-px h-6 bg-gray-300" />
        <button
          type="button"
          className="w-10 h-10 flex items-center justify-center disabled:opacity-40 text-black"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLastPage}
          aria-label="Next page"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Pagination;
