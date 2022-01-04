import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Top from "./pages/Top";
import About from "./pages/About"
import Content from "./pages/Content"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/about" element={<About />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </Router>
  );
}

export default App;
