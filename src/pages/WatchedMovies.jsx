import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MovieItem from "../components/MovieItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useMoviesContext } from "../contexts/MovieContext";
const MOVIES_PER_PAGE = 10;

function WatchedMovies() {
  const { watched, setSelectedID } = useMoviesContext();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  if (watched.length === 0)
    return (
      <div className="h-[100%] flex items-center justify-center">
        <p className="text-center text-yellow-500 text-3xl lg:text-4xl font-bold ">
          Add movies to your watch list! 😉
        </p>
      </div>
    );

  const totalPages = Math.ceil(watched.length / MOVIES_PER_PAGE);
  const startIndex = (currentPage - 1) * MOVIES_PER_PAGE;
  const paginatedMovies = watched.slice(
    startIndex,
    startIndex + MOVIES_PER_PAGE
  );

  return (
    <>
      <div className="p-5 px-16 md:px-10 ">
        <button
          className="bg-yellow-400 p-2 rounded-full cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon className="text-white " />
        </button>
      </div>
      <ul className="flex flex-wrap gap-8 justify-start m-10">
        {paginatedMovies.map((movie) => (
          <MovieItem
            key={movie.imdbID}
            movie={movie}
            saved={true}
            onClick={() => {
              navigate(`/movies/${movie.imdbID}`);
              setSelectedID(movie.imdbID);
            }}
          />
        ))}
      </ul>

      {totalPages > 1 && (
        <div className="flex justify-center gap-4 py-6">
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-yellow-500 cursor-pointer text-white rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="text-white">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-yellow-500 cursor-pointer text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default WatchedMovies;
