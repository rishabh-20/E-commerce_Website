import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './login/Login';
import Register from "./login/Register";
import ChangePassword from "./login/ChangePassword";
import Hero from "./componets/Hero";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ChangePassword/>}/>
          <Route path="/Hero" element={<Hero/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

