import { useState, useEffect } from "react";
function Login({ setLoggedInUser }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [loggedInUser, setLocalUser] = useState(null);
  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      setLocalUser(savedUser);
      setLoggedInUser(savedUser);
    }
  }, [setLoggedInUser]);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Welcome ${user.email}`);
    setLoggedInUser(user.email);
    localStorage.setItem("loggedInUser", user.email);
    setLocalUser(user.email);
    setUser({ email: "", password: "" });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#121212",
      }}
    >
      <div
        style={{
          background: "#1e1e1e",
          padding: "30px",
          borderRadius: "12px",
          textAlign: "center",
          color: "white",
          width: "350px",
        }}
      >
        {!loggedInUser ? (
          <>
            <h1>Login !!</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={user.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  margin: "10px 0",
                  borderRadius: "8px",
                  border: "none",
                  background: "#1e1e1e",
                  color: "white",
                }}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={user.password}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  margin: "10px 0",
                  borderRadius: "8px",
                  border: "none",
                  background: "#1e1e1e",
                  color: "white",
                }}
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Login
              </button>
            </form>
          </>
        ) : (
          <>
            <h2>Welcome, {loggedInUser}</h2>
            <p>You are now logged in.</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
