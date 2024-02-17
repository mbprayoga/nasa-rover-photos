//berubah di sini
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

// Pages
import Photo from "./pages/PhotoPage";
import Rover from "./pages/RoverPage";
import Profile from "./pages/ProfilePage";
import PhotoDetailPage from "./pages/PhotoDetailPage";
import RoverDetailPage from "./pages/RoverDetailPage";
import { FaGithub} from "react-icons/fa";
import { MdPhoto, MdPerson } from "react-icons/md";
import { RiRocketFill } from "react-icons/ri";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Link id="titleGroup" to="/photo">
            <span>NASA</span>
            <br />
            Rover <spanphoto>Photos</spanphoto>
          </Link>
          <Link to="/photo" className="iconWrapper" ><MdPhoto className="icon" />Photo</Link>
          <Link to="/rover" className="iconWrapper" ><RiRocketFill className="icon" />Rover</Link>
          <Link to="/profile" className="iconWrapper" ><MdPerson className="icon" />About</Link>
        </header>
        <Routes>
          <Route path="/" element={<Navigate to="/photo" replace />} />
          <Route path="/photo" element={<Photo/>} />
          <Route path="/rover" element={<Rover/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/photo/detail/:id" element={<PhotoDetailPage/>} />
          <Route path="/rover/detail/:id" element={<RoverDetailPage/>} />
        </Routes>
        <footer>
          <div className="footer-left">
            <p>Journey to Mars: NASA Rover Photos</p>
          </div>
          <div className="footer-right">
            <a href="https://github.com/mbprayoga/nasa-rover-photos.git" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} color="white" />
            </a>
            <p>mbprayoga - 2023</p>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
//sama di sini
