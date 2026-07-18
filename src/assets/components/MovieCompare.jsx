function MovieCompare({ movie1, movie2 }) {
  if (!movie1 || !movie2) return null;
  return (
    <div className="compare-container">
      <div className="compare-card">
        <h2>{movie1.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie1.poster_path}`}
          alt={movie1.title}
        />
        <p>⭐ {movie1.vote_average}</p>
        <p>📅 {movie1.release_date}</p>
        <p>🔥 Popularity: {movie1.popularity}</p>
      </div>
      <div className="compare-card">
        <h2>{movie2.title}</h2>

        <img
          src={`https://image.tmdb.org/t/p/w300${movie2.poster_path}`}
          alt={movie2.title}
        />
        <p>⭐ {movie2.vote_average}</p>
        <p>📅 {movie2.release_date}</p>
        <p>🔥 Popularity: {movie2.popularity}</p>
      </div>

    </div>
  );
}

export default MovieCompare;