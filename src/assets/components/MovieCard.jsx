import { useMovies } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";
export default function MovieCard({ movie }) {
  const { addFavorite, addWatchlist } = useMovies();
  const navigate = useNavigate();
  const handleFavorite = () => {
    addFavorite(movie);
    alert(`${movie.title} added to Favorites`);
  };

  const handleWatchlist = () => {
    addWatchlist(movie);
    alert(`${movie.title} added to Watchlist`);
  };

  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average}</p>
      <p>{movie.release_date}</p>
      <p>ID: {movie.id}</p>
      <button onClick={handleFavorite}>Add Favorite</button>
      <button onClick={handleWatchlist}>Watchlist</button>
      <button onClick={() => navigate(`/movie/${movie.id}`)}>
        View Details
      </button>
    </div>
  );
}
