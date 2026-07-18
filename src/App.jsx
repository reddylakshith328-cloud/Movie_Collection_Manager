import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar.jsx";
import Footer from "./assets/components/Footer.jsx";
import Home from "./assets/pages/Home.jsx";
import Favorites from "./assets/pages/Favorites.jsx";
import Watchlist from "./assets/pages/Watchlist.jsx";
import Dashboard from "./assets/pages/Dashboard.jsx";
import Compare from "./assets/pages/Compare.jsx";
import Login from "./assets/pages/Login.jsx";
import MovieDetails from "./assets/pages/MovieDetails.jsx";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("loggedInUser") || null
  );
  return (
    <>
      <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/compare" element={<Compare />} />
        <Route
          path="/login"
          element={<Login setLoggedInUser={setLoggedInUser} />}
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
