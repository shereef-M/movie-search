import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Favourites = () => {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || [],
  );

  function removeFromFavourites(movie) {
    const updated = favourites.filter((fav) => fav.imdbID !== movie.imdbID);
    setFavourites(updated);
    localStorage.setItem("favourites", JSON.stringify(updated));
  }

  return (
    <div className="page">
      <h2>My Favourites</h2>
      <div className="movies-grid">
        {favourites.length === 0 ? (
          <p>No favourites yet. Start adding some!</p>
        ) : (
          favourites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onAddFavourite={removeFromFavourites}
              buttonLabel="Remove from Favorites"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favourites;
