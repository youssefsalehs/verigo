import { useEffect, useState } from "react";
const key = "f1a596d4";

export default function useMovies(Query, page, selectedID) {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchMovies() {
      if (!Query || Query.trim().length < 1) return;

      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${key}&s=${Query}&page=${page}`
        );
        const data = await res.json();

        if (data.Response === "False") {
          setError(data.Error);
          setMovies([]);
          setTotalPages(0);
          return;
        }

        setMovies(data.Search);
        const total = Number(data.totalResults);
        setTotalPages(Math.ceil(total / 10));
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [Query, page]);

  useEffect(() => {
    async function fetchMovie() {
      if (!selectedID) return;

      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${key}&i=${selectedID}`
        );
        const data = await res.json();

        if (data.Response === "False") {
          setError(data.Error);
          setMovie({});
          return;
        }

        setMovie(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovie();
  }, [selectedID]);

  return {
    movies,
    movie,
    error,
    isLoading,
    totalPages,
  };
}
