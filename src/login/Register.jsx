import React from "react";
import '../style/Register.css';  // Import external CSS

function Register() {
  return (
    <form>
        <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form className="register-form">
        <div className="form-field">
          <label className="form-label">Name</label>
          <input type="text" placeholder="Enter your name" className="form-input" required />
        </div>
        <div className="form-field">
          <label className="form-label">Username</label>
          <input type="text" placeholder="Enter your username" className="form-input" required />
        </div>
        <div className="form-field">
          <label className="form-label">Email</label>
          <input type="email" placeholder="Enter your email" className="form-input" required />
        </div>
        <div className="form-field">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            pattern="[0-9]{10}"
            className="form-input"
            required
          />
        </div>
        <div className="form-field">
          <label className="form-label">Password</label>
          <input type="password" placeholder="Enter your password" className="form-input" required />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
    </form>
  );
}

export default Register;
