import React from 'react';
import { useLocation } from 'react-router-dom';
import './RoverDetailPage.css'; 

function RoverDetailPage() {
    const { state } = useLocation();
    const item = state && state.item;

    if (!item) {
        return <div className="roverDetailContainer">No data available.</div>;
    }

    return (
        <div className="roverDetailContainer">
            <h1>{item.name}</h1>
            <p className="roverDetail">Landing Date: {item.landing_date}</p>
            <p className="roverDetail">Launch Date: {item.launch_date}</p>
            <p className="roverDetail">Status: {item.status}</p>
            <p className="roverDetail">Max Sol: {item.max_sol}</p>
            <p className="roverDetail">Max Date: {item.max_date}</p>
            <p className="roverDetail">Total Photos: {item.total_photos}</p>
            <p className="roverDetail">Available Camera: </p>
            <ul className="cameraList">
                {item.cameras.map(camera => (
                    <li key={camera.name}>
                        <span className="cameraName">{camera.name}</span> - 
                        <span className="cameraFullName"> {camera.full_name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RoverDetailPage;
