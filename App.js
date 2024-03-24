import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";

import Nearby from "./components/Nearby/nearby";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Temp from "./components/Temp/temp";
import Districts from "./components/Districts/district";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nearby" element={<Nearby />} />
          
          <Route path="/Temp" element={<Temp/>} />
          <Route path="/Districts" element={<Districts />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
