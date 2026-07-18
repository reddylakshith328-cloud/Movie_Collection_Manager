import { useMovies } from "../context/MovieContext";
function Dashboard() {
  const { favorites, watchlist } = useMovies();
  const totalFavorites = favorites.length;
  const totalWatchlist = watchlist.length;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "100vh",
        background: "#121212",
        color: "white",
        padding: "30px",
      }}
    >
      <h1>Personal Dashboard</h1>
      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "#1e1e1e",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h2>Favorites</h2>
          <h1>{totalFavorites}</h1>
        </div>
        <div
          style={{
            background: "#1e1e1e",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h2>Watchlist</h2>
          <h1>{totalWatchlist}</h1>
        </div>
      </div>
      <hr style={{ width: "80%", margin: "30px 0", borderColor: "#333" }} />
      <h2>Statistics Summary</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Total Favorite Movies: {totalFavorites}</li>
        <li>Total Watchlist Movies: {totalWatchlist}</li>
      </ul>
    </div>
  );
}

export default Dashboard;
