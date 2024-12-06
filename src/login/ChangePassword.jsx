import React, { useState } from "react";
import "../style/ChangePassword.css";

function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      alert("Your password has been changed successfully!");
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="heading">Change Password</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-field">
            <label className="label">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="form-field">
            <label className="label">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input"
              required
            />
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
