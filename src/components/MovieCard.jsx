

function MovieCard({ movie, onAddFavourite, buttonLabel = 'Add to Favourites' }) {
  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} width="200" />
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <button onClick={() => onAddFavourite(movie)}>{buttonLabel}</button>
    </div>
  );
}

export default MovieCard;