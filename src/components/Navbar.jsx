import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useMoviesContext } from "../contexts/MovieContext";
function Navbar() {
  const { query, setQuery, setPage } = useMoviesContext();
  const navigate = useNavigate();
  const location = useLocation();
  function handleSubmit(e) {
    e.preventDefault();
    if (query || query.trim().length > 1) {
      navigate(`/movies`);
      setPage(1);
    }
  }

  useEffect(() => {
    if (query === "" && location.pathname === "/movies") {
      navigate("/");
      setPage(1);
    }
  }, [query, location.pathname, navigate, setPage]);
  return (
    <nav className="flex items-center justify-between bg-stone-950 px-6 py-3">
      <Logo />
      <form
        onSubmit={handleSubmit}
        className="w-[80%] sm:w-[80%] md:w-[60%] lg:w-[40%] flex justify-center items-center"
      >
        <input
          className="bg-white p-2 w-[80%] focus:outline-none focus:ring-1 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-amber-200 rounded-md "
          type="text"
          placeholder="Search Movies....."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            navigate("/movies");
          }}
        />
      </form>

      <Link to="/watchedlist">
        <button
          onClick={() => setPage(1)}
          className="text-yellow-400 text-xl flex items-center cursor-pointer "
        >
          <span className="mr-0.5 ">
            <BookmarkIcon style={{ fontSize: "30px" }} />
          </span>
          <span className="hidden md:inline-block">Watched List</span>
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
