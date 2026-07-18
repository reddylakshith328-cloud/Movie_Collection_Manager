import { useEffect, useState } from "react";
import { getTrendingMovies, searchMovies, getRandomMovie } from "../services/api";
import MovieCard from "../components/MovieCard";
import MoodSelector from "../components/MoodSelector";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    loadTrending();
  }, []);

  const loadTrending = async () => {
    const data = await getTrendingMovies();
    setMovies(data);
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    const results = await searchMovies(query);
    setMovies(results);
  };

  const handleRandom = async () => {
    const movie = await getRandomMovie();
    setMovies([movie]);
  };

  return (
    <div className="container">
      <h1>🎬 Movie Collection Manager</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleRandom}>Random Movie</button>
      </div>

      <MoodSelector setMovies={setMovies} />

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2 style={{ textTransform: "uppercase", margin: "10px 0" }}>DATABASE</h2>
      </div>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
