import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './login/Login';
import Register from "./login/Register";
// import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

