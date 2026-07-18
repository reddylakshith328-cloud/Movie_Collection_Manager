import { useState } from "react";
import { getRandomMovie } from "../services/api";
import MovieCard from "./MovieCard";
function Roulette() {
  const [movie, setMovie] = useState(null);
  async function spinRoulette() {
    const randomMovie = await getRandomMovie();
    setMovie(randomMovie);
  }

  return (
    <div className="container">
      <h2> Random Movie Roulette</h2>
      <button onClick={spinRoulette}>
        Spin Roulette
      </button>
      <br />
      <br />
      {movie && <MovieCard movie={movie} />}
    </div>
  );
}

export default Roulette;