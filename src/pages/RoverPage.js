import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import RoverCard from "../components/RoverCard";

import './RoverPage.css'; 

function RoverPage() {
    const [rover, setRover] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Function to fetch data from API
        const fetchData = async () => {
          setIsLoading(true);
          try {
            const response = await axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=LAPkP6tK1rRGwjLlRTEOPAM03Zd12bOXxa52wFfv");
            if (response.status === 200) {
              setRover(response.data.rovers);
              setIsLoaded(true);
              setIsLoading(false);
              // Store data in local storage
              localStorage.setItem("cachedDataRover", JSON.stringify(response.data.rovers));
            }
          } catch (err) {
            console.log(err);
            setIsLoading(false);
          }
        };
    
        // Check for cached data in local storage
        const cachedData = localStorage.getItem("cachedDataRover");
        if (!isLoaded && !navigator.onLine && cachedData) {
          setRover(JSON.parse(cachedData));
          setIsLoaded(true);
        } else if (!isLoaded && navigator.onLine) {
          // If not offline and not loaded, fetch data
          fetchData();
        }
      }, [isLoaded]);

      const navigateToDetailPage = (item) => {
        navigate(`/rover/detail/${item.id}`, { state: { item: item } });
    };

    return (
        <>
            <p id="rovers">Rovers</p>
            <div className="roverContainerTop">
                    {rover.map((item, index) => (
                        <Fragment key={item.id}>
                          <div className="roverColumn"> 
                            <RoverCard total_photos={item.total_photos} name={item.name} status={item.status} max_sol={item.max_sol} landing_date={item.landing_date} max_date={item.max_date} onClick={() => navigateToDetailPage(item)}/>
                          </div>
                        </Fragment>
                    ))}
            </div>
        </>
    );
}

export default RoverPage;


