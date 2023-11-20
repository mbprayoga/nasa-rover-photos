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
            <h1>{item.id}</h1>
            <img src={item.img_src} className="detail-img" />
            <p className="photoDetail">Date Taken: {item.earth_date}</p>
            <p className="photoDetail">Rover Source: {item.rover.name}</p>
            <p className="photoDetail">Camera Source: {item.camera.full_name}</p>
            <p className="photoDetail">Sol: {item.sol}</p>
            
        </div>
    );
}

export default PhotoDetailPage;
