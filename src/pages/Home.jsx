import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from '../components/MovieCard';

function Home() {
  // State variables
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search function
  async function searchMovies() {
    setLoading(true);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=4703989d`,
      );

      const data = await response.json();

      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Movie Search</h1>

      <SearchBar query={query} setQuery={setQuery} onSearch={searchMovies} />

      {loading && <p>Loading...</p>}

      {!loading &&
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
    </div>
  );
}

export default Home;

