import { Link } from "react-router-dom";
import { useMoviesContext } from "../contexts/MovieContext";
function Logo() {
  const { setQuery } = useMoviesContext();
  return (
    <div
      className="flex items-center text-2xl gap-2 bg-yellow-500 rounded-md p-2 "
      onClick={() => setQuery("")}
    >
      <Link to="/">
        <p className="font-bold">Verigo</p>
      </Link>
    </div>
  );
}

export default Logo;
