import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../style/login.css'; // Import CSS file

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <video className="background-video" autoPlay loop muted>
        <source src="path_to_your_video.mp4" type="video/mp4" />
        <source src="path_to_your_video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="form-container">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="inputGroup">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="inputGroup">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <div className="links">
            <Link to="/forgot">Forgot Password?</Link>
            <br />
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;