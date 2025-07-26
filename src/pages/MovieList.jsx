import { useNavigate } from "react-router-dom";
import MovieItem from "../components/MovieItem";
import Pagination from "../components/Pagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useMoviesContext } from "../contexts/MovieContext";
import LoadingPage from "./LoadingPage";
export default function MovieList() {
  const { movies, isLoading, error, query, setSelectedID } = useMoviesContext();
  const navigate = useNavigate();
  if (isLoading) return <LoadingPage />;
  if (error)
    return (
      <div className="h-[100%] flex items-center justify-center">
        <p className="text-center text-red-500 text-4xl font-bold">{error}😭</p>
      </div>
    );

  return (
    <>
      <div className=" px-16 pt-5 md:px-10 ">
        <button
          className="bg-yellow-400 p-2 rounded-full cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon className="text-white" />
        </button>
      </div>
      {query && (
        <>
          <ul className=" flex flex-wrap gap-8 justify-start mx-10 my-5">
            {movies.map((movie) => (
              <MovieItem
                key={movie.imdbID}
                movie={movie}
                onClick={() => {
                  navigate(`/movies/${movie.imdbID}`);
                  setSelectedID(movie.imdbID);
                }}
              />
            ))}
          </ul>
          <Pagination />
        </>
      )}
    </>
  );
}
