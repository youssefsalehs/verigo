import { Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import MovieList from "./pages/MovieList";
import Movie from "./pages/Movie";
import PageError from "./pages/pageError";
import WatchedMovies from "./pages/WatchedMovies";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<MovieList />} />
        <Route path="movies/:id" element={<Movie />} />

        <Route path="watchedlist" element={<WatchedMovies />} />

        <Route path="*" element={<PageError />} />
      </Route>
    </Routes>
  );
}

export default App;
