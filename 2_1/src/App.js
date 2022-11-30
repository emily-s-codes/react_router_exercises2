import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Hours from "./pages/Hours";
import Photos from "./pages/Photos";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hours" element={<Hours />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
