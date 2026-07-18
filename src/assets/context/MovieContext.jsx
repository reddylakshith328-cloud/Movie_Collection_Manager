import { createContext, useContext, useState } from "react";
const MovieContext = createContext();
export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const addFavorite = (movie) => {
    if (!favorites.find((m) => m.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const addWatchlist = (movie) => {
    if (!watchlist.find((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const unlockAchievement = (title) => {
    if (!achievements.includes(title)) {
      setAchievements([...achievements, title]);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        favorites,
        watchlist,
        achievements,
        addFavorite,
        addWatchlist,
        unlockAchievement,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);