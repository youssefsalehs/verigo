import pic from "../assets/fallback.jpg";
import { useMoviesContext } from "../contexts/MovieContext";

function MovieItem({ movie, onClick, saved = false }) {
  const { setWatched } = useMoviesContext();
  return (
    <div className="w-64 group h-96 mx-auto flex flex-col  items-center text-left relative overflow-hidden">
      <img
        src={movie?.Poster ?? pic}
        alt={movie.Title}
        className="w-full h-full rounded-md group-hover:scale-[1.01]"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = pic;
        }}
        onClick={onClick}
      />
      {saved && (
        <button
          className="absolute top-0 right-0 p-2 bg-yellow-500 cursor-pointer scale-[0.8] rounded-full"
          onClick={() => {
            setWatched((prev) => prev.filter((m) => m.imdbID !== movie.imdbID));
          }}
        >
          ❌
        </button>
      )}
      <div
        className="absolute bottom-0 w-full bg-white shadow-2xl rounded-b-md p-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
        onClick={onClick}
      >
        <p>{movie.Title}</p>
        <p>🗓️ {movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieItem;
