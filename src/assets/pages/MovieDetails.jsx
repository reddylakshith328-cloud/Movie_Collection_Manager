import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieDetails,
  getSimilarMovies,
} from "../services/api";
import MovieCard from "../components/MovieCard";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovie();
  }, [id]);

  async function loadMovie() {
    setLoading(true);

    const movieData = await getMovieDetails(id);
    const similarData = await getSimilarMovies(id);

    setMovie(movieData);
    setSimilarMovies(similarData);

    setLoading(false);
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!movie) {
    return <h2>Movie not found.</h2>;
  }

  return (
    <div className="container">

      <h1>{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <p>
        <strong>⭐ Rating:</strong> {movie.vote_average}
      </p>

      <p>
        <strong>📅 Release Date:</strong> {movie.release_date}
      </p>

      <p>
        <strong>⏱ Runtime:</strong> {movie.runtime} mins
      </p>

      <p>
        <strong>🌍 Language:</strong> {movie.original_language.toUpperCase()}
      </p>

      <p>
        <strong>🎭 Genres:</strong>{" "}
        {movie.genres.map((genre) => genre.name).join(", ")}
      </p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <hr />
      <h2> Similar Movies</h2>
      <div className="movie-grid">
        {similarMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>

    </div>
  );
}

export default MovieDetails;