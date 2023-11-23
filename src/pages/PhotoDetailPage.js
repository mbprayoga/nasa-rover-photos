// PhotoDetailPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './PhotoDetailPage.css'; 

function PhotoDetailPage() {
    const { state } = useLocation();
    const item = state && state.item;

    if (!item) {
        return <div className="photoDetailContainer">No data available.</div>;
    }

    return (
        <div className="photoDetailContainer">
            <h1 className="photoId">{item.id}</h1>
            <img src={item.img_src} alt="Mars Rover" className="detail-img" />
            <div className="photoDetailDate">
                <p>{item.earth_date}</p>
                <p>Sol: {item.sol}</p>
            </div>
            <p className="photoDetail"><span className="detailLabel">Source: </span>{item.rover.name} with {item.camera.full_name}</p>                 
        </div>
    );
}

export default PhotoDetailPage;
