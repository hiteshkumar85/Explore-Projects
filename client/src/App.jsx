import React from "react";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Solution from "./pages/Solution"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/solution" element={<Solution />} />
        <Route path ="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App
