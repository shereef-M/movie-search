
function MovieCard({ movie }) {
  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} width="200px" />

      <h1>{movie.Title}</h1>

      <p>year: {movie.Year}</p>
    </div>
  );
}

export default MovieCard;
