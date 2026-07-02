import { useNavigate } from "react-router-dom";

function MovieCard({
  movie,
  onAddFavourite,
  buttonLabel = "Add to Favourites",
}) {
  const navigate = useNavigate();

  return (
    <div
      className="movie-card"
      onClick={() => navigate(`/movie/${movie.imdbID}`)}
    >
      <img src={movie.Poster} alt={movie.Title} width="200" />
      <div className="movie-card-info">
        <h2>{movie.Title}</h2>
        <p>Year: {movie.Year}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddFavourite(movie);
          }}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
