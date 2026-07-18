import { useState } from "react";
import { getMovieDetails } from "../services/api";
function Compare() {
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");
  const [movie1, setMovie1] = useState(null);
  const [movie2, setMovie2] = useState(null);
  async function handleCompare() {
    if (!id1 || !id2) {
      alert("Enter both Movie IDs");
      return;
    }
    const first = await getMovieDetails(id1);
    const second = await getMovieDetails(id2);
    setMovie1(first);
    setMovie2(second);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        background: "#121212",
        color: "white",
        padding: "30px",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Movie Comparison</h1>
      <div style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
        <input
          type="number"
          placeholder="Movie ID 1"
          value={id1}
          onChange={(e) => setId1(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#1e1e1e",
            color: "white",
            width: "220px",
          }}
        />
        <input
          type="number"
          placeholder="Movie ID 2"
          value={id2}
          onChange={(e) => setId2(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#1e1e1e",
            color: "white",
            width: "220px",
          }}
        />
        <button
          onClick={handleCompare}
          style={{
            padding: "12px 24px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "transform 0.3s ease, background 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#ff4d4d";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "red";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Compare
        </button>
      </div>
      {movie1 && movie2 && (
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
            gap: "50px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#1e1e1e",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              width: "300px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie1.poster_path}`}
              alt={movie1.title}
              style={{ borderRadius: "8px", marginBottom: "15px", width: "100%" }}
            />
            <h2>{movie1.title}</h2>
            <p>Rating: {movie1.vote_average}</p>
            <p>Release: {movie1.release_date}</p>
            <p>Runtime: {movie1.runtime} mins</p>
          </div>

          <h1 style={{ color: "red", alignSelf: "center" }}>VS</h1>
          <div
            style={{
              background: "#1e1e1e",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              width: "300px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie2.poster_path}`}
              alt={movie2.title}
              style={{ borderRadius: "8px", marginBottom: "15px", width: "100%" }}
            />
            <h2>{movie2.title}</h2>
            <p>Rating: {movie2.vote_average}</p>
            <p>Release: {movie2.release_date}</p>
            <p>Runtime: {movie2.runtime} mins</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Compare;
