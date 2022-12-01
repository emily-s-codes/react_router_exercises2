import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ReadMore from "./components/button/ReadMore";
// import ComponentCard from "./components/componentcard/ComponentCard";
import Homepage from "./pages/Homepage";
import Blog from "./pages/blog/Blog";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import BlogArticlePage from './pages/blogArticlePage/BlogArticlePage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogArticlePage />} />
          <Route path="/details" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
