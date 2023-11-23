import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import PhotoCard from "../components/PhotoCard";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

// ... (your existing imports)

import "./PhotoPage.css";

function PhotoPage() {
  const [photo, setPhoto] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [solValue, setSolValue] = useState(1000);
  const [roverName, setRoverName] = useState("curiosity");
  const navigate = useNavigate();
  let maxSol;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${solValue}&page=${currentPage}&api_key=LAPkP6tK1rRGwjLlRTEOPAM03Zd12bOXxa52wFfv`
        );
        if (response.status === 200) {
          setPhoto(response.data.photos);
          setIsLoaded(true);
          setIsLoading(false);
          localStorage.setItem(
            "cachedDataPhoto",
            JSON.stringify(response.data.photos)
          );
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    const cachedData = localStorage.getItem("cachedDataPhoto");
    if (!isLoaded && !navigator.onLine && cachedData) {
      setPhoto(JSON.parse(cachedData));
      setIsLoaded(true);
    } else if (!isLoaded && navigator.onLine) {
      fetchData();
    }
  }, [isLoaded, currentPage, solValue, roverName]);

  useEffect(() => {
    // Determine the max sol value based on the chosen roverName
    switch (roverName) {
      case 'curiosity':
        maxSol = 4003; // Set the max sol value for Curiosity
        break;
      case 'perseverance':
        maxSol = 968; // Set the max sol value for Perseverance
        break;
      case 'opportunity':
        maxSol = 5111; // Set the max sol value for Opportunity
        break;
      case 'spirit':
        maxSol = 2208; // Set the max sol value for Spirit
        break;
      default:
        maxSol = 5111; // Set a default max sol value
    }

    // Update the solValue if it exceeds the new maxSol
    if (solValue > maxSol) {
      setSolValue(maxSol);
    }
  }, [roverName, solValue]);

  const navigateToDetailPage = (item) => {
    navigate(`/photo/detail/${item.id}`, { state: { item: item } });
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    setIsLoaded(false);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setIsLoaded(false);
    }
  };

  const handleConfirmQuery = () => {
    setCurrentPage(1);
    setIsLoaded(false);
  };

  const handleSolChange = (event) => {
    let newValue = parseInt(event.target.value);

    // Ensure the value is within the allowed range
    if(newValue>maxSol){
      newValue = maxSol;
    }
    

    setSolValue(newValue);
  };

  const handleRoverChange = (event) => {
    const newRoverName = event.target.value;
    setRoverName(newRoverName);
  };

  return (
    <div>
      <div className="prevFilterNext">
        <div><MdNavigateBefore id="navIcon" className="navIcon" onClick={handlePrevPage}/></div>
        <div id="filters">
          <div className="filterItem">
            <div className="radioGroup">
              <label className={`radioLabel ${roverName === 'curiosity' ? 'active' : ''}`}>
                <input
                  type="radio"
                  value="curiosity"
                  checked={roverName === "curiosity"}
                  onChange={handleRoverChange}
                />
                Curiosity
              </label>
              <label className={`radioLabel ${roverName === 'perseverance' ? 'active' : ''}`}>
                <input
                  type="radio"
                  value="perseverance"
                  checked={roverName === "perseverance"}
                  onChange={handleRoverChange}
                />
                Perseverance
              </label>
              <label className={`radioLabel ${roverName === 'spirit' ? 'active' : ''}`}>
                <input
                  type="radio"
                  value="spirit"
                  checked={roverName === "spirit"}
                  onChange={handleRoverChange}
                />
                Spirit
              </label>
              <label className={`radioLabel ${roverName === 'opportunity' ? 'active' : ''}`}>
                <input
                  type="radio"
                  value="opportunity"
                  checked={roverName === "opportunity"}
                  onChange={handleRoverChange}
                />
                Opportunity
              </label>
            </div>
          </div>
          <div className="filterItem">
            <label className="solLabel" htmlFor="solInput">Sol:</label>
            <input
              type="number"
              id="solInput"
              min={1}
              max={maxSol}
              step={1}
              value={solValue}
              onChange={handleSolChange}
            />
          </div>
          <div><FaSearch id="searchIcon" onClick={handleConfirmQuery}/></div>
        </div>
        <div><MdNavigateNext id="navIcon" className="navIcon" onClick={handleNextPage}/></div>
      </div>
      <div className="photoContainerTop">
        {photo.map((item, index) => (
          <Fragment key={item.id}>
            <div className="photoColumn">
              <PhotoCard img={item.img_src} onClick={() => navigateToDetailPage(item)}/>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default PhotoPage;
