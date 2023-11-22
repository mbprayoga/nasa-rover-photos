import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import PhotoCard from "../components/PhotoCard";

import "./PhotoPage.css";

function PhotoPage() {
  const [photo, setPhoto] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [solValue, setSolValue] = useState(1000);
  const [roverName, setRoverName] = useState("curiosity");
  const navigate = useNavigate();

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
            "cachedData",
            JSON.stringify(response.data.photos)
          );
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    const cachedData = localStorage.getItem("cachedData");
    if (!isLoaded && !navigator.onLine && cachedData) {
      setPhoto(JSON.parse(cachedData));
      setIsLoaded(true);
    } else if (!isLoaded && navigator.onLine) {
      fetchData();
    }
  }, [isLoaded, currentPage, solValue, roverName]);

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
    setSolValue(parseInt(event.target.value));
  };

  const handleRoverChange = (event) => {
    setRoverName(event.target.value);
  };

  return (
    <>
      <div id="filters">
        <div className="filterItem">
          <label>Rover Name:</label>
          <div>
            <label>
              <input
                type="radio"
                value="curiosity"
                checked={roverName === "curiosity"}
                onChange={handleRoverChange}
              />
              Curiosity
            </label>
            <label>
              <input
                type="radio"
                value="perseverance"
                checked={roverName === "perseverance"}
                onChange={handleRoverChange}
              />
              Perseverance
            </label>
            <label>
              <input
                type="radio"
                value="spirit"
                checked={roverName === "spirit"}
                onChange={handleRoverChange}
              />
              Spirit
            </label>
            <label>
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
          <input
            type="range"
            id="solSlider"
            min={1}
            max={5111}
            step={1}
            value={solValue}
            onChange={handleSolChange}
          />
          <label htmlFor="solSlider">Sol Value: {solValue}</label>
        </div>
        <button onClick={handleConfirmQuery}>Confirm Query</button>
      </div>


      <div id="photos">
        <button onClick={handlePrevPage}>Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage}>Next</button>
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
    </>
  );
}

export default PhotoPage;
