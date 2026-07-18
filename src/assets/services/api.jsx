const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
export async function getTrendingMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    );
    if (!response.ok) throw new Error("Failed to fetch trending movies");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Trending Error:", error);
    return [];
  }
}
export async function searchMovies(query) {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    if (!response.ok) throw new Error("Search failed");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Search Error:", error);
    return [];
  }
}
export async function getMovieDetails(id) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    if (!response.ok) throw new Error("Movie not found");
    return await response.json();
  } catch (error) {
    console.error("Details Error:", error);
    return null;
  }
}
export function getSimilarMovies(id) {
  return fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) throw new Error("Unable to fetch similar movies");
      return response.json();
    })
    .then((data) => data.results)
    .catch((error) => {
      console.error("Similar Error:", error);
      return [];
    });
}
export function getPopularMovies() {
  return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => {
      console.error("Popular Error:", error);
      return [];
    });
}
export async function getTopRatedMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Top Rated Error:", error);
    return [];
  }
}
export async function getUpcomingMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Upcoming Error:", error);
    return [];
  }
}
export async function getRandomMovie() {
  try {
    const movies = await getPopularMovies();
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  } catch (error) {
    console.error("Random Movie Error:", error);
    return null;
  }
}
export async function getMoviesByGenre(genreId) {
  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Genre Error:", error);
    return [];
  }
}
