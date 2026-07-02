import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

function Home() {
  // State variables
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favourites, setFavourites] = useState(() => {
    return JSON.parse(localStorage.getItem("favourites")) || [];
  });
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
  function addToFavourites(movie) {
    // Check if movie is already in favourites
    const alreadyAdded = favourites.find((fav) => fav.imdbID === movie.imdbID);

    if (alreadyAdded) {
      alert("Movie already in favourites!");
      return;
    }

    // Add movie to favourites
    const updatedFavourites = [...favourites, movie];
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  }

  return (
    <div>
      <h1>Movie Search</h1>

      <SearchBar query={query} setQuery={setQuery} onSearch={searchMovies} />

      {loading && <p>Loading...</p>}

      {!loading &&
        movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onAddFavourite={addToFavourites}
          />
        ))}
    </div>
  );
}

export default Home;
