import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useMovies from "../hooks/useMovies";

const MovieContext = createContext();

export default function MovieProvider({ children }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const [selectedID, setSelectedID] = useState("");
  const [watched, setWatched] = useLocalStorage([], "watched");

  const { movies, error, isLoading, totalPages, movie } = useMovies(
    query,
    page,
    selectedID
  );

  return (
    <MovieContext.Provider
      value={{
        query,
        setQuery,
        page,
        setPage,
        selectedID,
        setSelectedID,
        watched,
        setWatched,
        totalPages,
        isLoading,
        movie,
        movies,
        error,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMoviesContext() {
  const context = useContext(MovieContext);
  if (context === undefined)
    throw new Error("useMoviesContext must be used within a MovieProvider");

  return context;
}
