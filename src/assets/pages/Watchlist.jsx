import { useMovies } from "../context/MovieContext.jsx";
import MovieCard from "../components/MovieCard.jsx";
function Watchlist() {
  const { watchlist } = useMovies();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#121212",
        color: "white",
        padding: "20px",
      }}
    >
      <h1>My Watchlist</h1>
      {watchlist.length === 0 ? (
        <h2>Your watchlist is empty.</h2>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px",
            width: "100%",
            maxWidth: "1000px",
          }}
        >
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;
