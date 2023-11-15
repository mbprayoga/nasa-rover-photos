import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

// Pages
import Photo from "./pages/PhotoPage";
import Rover from "./pages/RoverPage";
import Profile from "./pages/ProfilePage";

// Components
import Header from "./components/header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Navigate to="/photo" replace />} />
        <Route path="/photo" element={<Photo/>} />
        <Route path="/rover" element={<Rover/>} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/photo/detail/:id" element={<DetailPage/>} />
        <Route path="/rover/detail/:id" element={<DetailPage/>} /> */}
      </Routes>
      <footer>
        <Link to="/photo" className="iconWrapper"><HiHome className="icon" />Photo</Link>
        <Link to="/rover" className="iconWrapper"><FaBook className="icon" />Rover</Link>
        <Link to="/profile" className="iconWrapper"><MdGroup className="icon" />Profile</Link>
      </footer>
      </Router>
    </div>
  );
}

export default App;
