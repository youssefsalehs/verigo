import { useMoviesContext } from "../contexts/MovieContext";

function Pagination() {
  const {
    page: currentPage,
    totalPages,
    setPage: onPageChange,
  } = useMoviesContext();
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 py-6 ">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-2 bg-yellow-500 text-white cursor-pointer rounded disabled:opacity-50"
      >
        Previous
      </button>

      <span className=" py-2 font-bold text-white">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-yellow-500 cursor-pointer text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
