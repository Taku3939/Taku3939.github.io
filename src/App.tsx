import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Top from "./pages/Top";
import About from "./pages/About"
import Content from "./pages/Content"
import ArtNetPage from "./pages/ArtNetPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/content" element={<Content />} />
        <Route path="/page/artnet_receiver" element={<ArtNetPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
