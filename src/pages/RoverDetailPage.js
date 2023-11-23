import React from 'react';
import { useLocation } from 'react-router-dom';
import './RoverDetailPage.css'; 

function RoverDetailPage() {
    const { state } = useLocation();
    const item = state && state.item;

    if (!item) {
        return (
            <div className="roverDetailContainer">
                <h1 className="roverName">No data available.</h1>
            </div>
        );
    }

    return (
        <div>
            <h1 className="roverName">{item.name}</h1>
            <div className="roverDetailContainer">
                <div className="roverDetailContainerInside">
                    <div className="roverDetails">
                        <p><span className="detailLabel">Landing Date:</span> {item.landing_date}</p>
                        <p><span className="detailLabel">Launch Date:</span> {item.launch_date}</p>
                        <p><span className="detailLabel">Status:</span> {item.status === "active" ? "Active" : "Completed"}</p>
                        <p><span className="detailLabel">Max Sol:</span> {item.max_sol} Sol (Martian Days)</p>
                        <p><span className="detailLabel">Max Date:</span> {item.max_date}</p>
                        <p><span className="detailLabel">Total Photos:</span> {item.total_photos}</p>
                    </div>
                </div>
                <div className="cameraDetails">
                    <p className="detailLabel">Available Cameras:</p>
                    <ul className="cameraList">
                        {item.cameras.map(camera => (
                            <li key={camera.name}>
                                <span className="cameraName">{camera.name}</span> - 
                                <span className="cameraFullName"> {camera.full_name}</span>
                            </li>
                        ))}
                    </ul>
                </div>   
            </div>
        </div>
    );
}

export default RoverDetailPage;
