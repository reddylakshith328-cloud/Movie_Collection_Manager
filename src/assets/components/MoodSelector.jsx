import { getMoviesByGenre } from "../services/api";
export default function MoodSelector({ setMovies }) {
  const handleMoodChange = async (e) => {
    const mood = e.target.value;
    const moodGenres = {
      Happy: 35,        
      Sad: 18,          
      Excited: 28,      
      Romantic: 10749, 
    };

    const genreId = moodGenres[mood];
    if (!genreId) return;
    const movies = await getMoviesByGenre(genreId);
    setMovies(movies);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Mood-Based Recommendations</h3>
      <select onChange={handleMoodChange}>
        <option value="">Choose Your Mood</option>
        <option value="Happy">Happy</option>
        <option value="Sad">Sad</option>
        <option value="Excited">Excited</option>
        <option value="Romantic">Romantic</option>
      </select>
    </div>
  );
}
