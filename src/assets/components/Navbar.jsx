import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar({ loggedInUser, setLoggedInUser }) {
  const [showInfo, setShowInfo] = useState(false);
  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    setShowInfo(false);
  }

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#1e1e1e",
        color: "white",
      }}
    >
      <h2 style={{ color: "red" }}>🎬 Movie Collection Manager</h2>
      <div className="nav-links" style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/compare">Compare</Link>
        {loggedInUser ? (
          <div style={{ position: "relative" }}>
            <img
              src="/userlogo.png"
              alt="User Logo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onClick={() => setShowInfo(!showInfo)}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            {showInfo && (
              <div
                style={{
                  position: "absolute",
                  top: "50px",
                  right: 0,
                  background: "#333",
                  color: "white",
                  padding: "10px",
                  borderRadius: "8px",
                  minWidth: "200px",
                }}
              >
                <p>Welcome, {loggedInUser}</p>
                <button
                  onClick={handleLogout}
                  style={{
                    marginTop: "10px",
                    padding: "8px 12px",
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
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
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
