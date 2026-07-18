import { useMovies } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorites() {
  const { favorites } = useMovies();
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
        padding: "30px",
        textAlign: "center",
      }}
    >
      <h1>My Favvourite Moviess {"<3"}</h1>
      {favorites.length === 0 ? (
        <h2>No favorite movies added yet.</h2>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
