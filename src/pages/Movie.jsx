import pic from "../assets/fallback.jpg";
import imdb from "../assets/download.png";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useMoviesContext } from "../contexts/MovieContext";
import LoadingPage from "./LoadingPage";
function Movie() {
  const { movie, setWatched, watched, isLoading } = useMoviesContext();
  const isBookmarked = watched.some((m) => m.imdbID === movie.imdbID);
  const navigate = useNavigate();
  function handleBookmark() {
    const newMovie = {
      imdbID: movie.imdbID,
      Poster: movie.Poster,
      Title: movie.Title,
      Year: movie.Year,
      Runtime: movie.Runtime,
    };
    setWatched((prev) => [...prev, newMovie]);
  }

  const {
    Poster,
    Title,
    Year,
    Runtime,
    Released,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Country,
    imdbRating,
  } = movie;
  if (isLoading) return <LoadingPage />;
  return (
    <>
      <div className=" px-6 pt-3 md:px-20 md:pt-8">
        <button
          className="bg-yellow-400 p-2 rounded-full cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon className="text-white" />
        </button>
      </div>
      <div className="flex justify-center items-center md:items-start md:justify-start p-5 md:py-8 md:px-24 gap-4 flex-col md:flex-row text-stone-300">
        <div className=" flex justify-center">
          <img
            src={Poster ?? pic}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = pic;
            }}
            className="md:w-[320px] md:h-[450px]"
          />
        </div>
        <div className="md:w-[50%] p-5 md:p-0 md:ml-5">
          <h1 className="text-4xl font-semibold text-stone-100">{Title}</h1>
          <p className="text-stone-500 text-lg mb-4">Directed by {Director}</p>
          <p className="flex justify-between md:w-[85%] mb-4">
            <span>{Year}</span> <span>{Runtime}</span> <span>{Genre}</span>
          </p>
          <p className="flex justify-between flex-col gap-4 lg:gap-0 lg:flex-row md:w-[85%] mb-4 text-sm md:text-[15px]">
            <span className="flex items-center gap-2">
              <img src={imdb} className="rounded-2xl w-8" />
              {imdbRating}
            </span>
            <span>🗓️ {Released}</span>
            <span>🏙️ {Country}</span>
          </p>
          <div className="my-8 md:my-10 text-lg">
            <p className="mb-4">📝 {Writer}</p>
            <p className="mb-4">🎭 {Actors}</p>
            <p className="mb-1">{Plot}</p>
          </div>
          {!isBookmarked ? (
            <button
              className="bg-yellow-500 rounded-full p-2 text-white cursor-pointer text-center relative left-[50%] md:left-0 md:translate-0 translate-x-[-50%]"
              onClick={handleBookmark}
            >
              Add To WatchList
            </button>
          ) : (
            <button
              className="bg-red-700 rounded-full p-2 text-white cursor-pointer text-center relative left-[50%] md:left-0 md:translate-0 translate-x-[-50%]"
              onClick={() => {
                setWatched((prev) =>
                  prev.filter((m) => m.imdbID !== movie.imdbID)
                );
                navigate(-1);
              }}
            >
              Delete from WatchList
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Movie;
