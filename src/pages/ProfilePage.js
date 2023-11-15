import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProfilePage.css'; 

function DetailPage() {
    const { state } = useLocation();
    const movieData = state && state.movieData;

    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    if (!movieData) {
        return <div className="container">No movie data available.</div>;
    }

    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < movieData.rate) {
            stars.push(<AiFillStar key={i} color={STAR_COLOR} size={STAR_SIZE} />);
        } else {
            stars.push(<AiFillStar key={i} color="#ccc" size={STAR_SIZE} />);
        }
    }

    return (
        <div className="container">
            <h1>{movieData.title}</h1>
            <img src={movieData.img} alt={movieData.title} className="detail-img" />
            <p className="detail-stars">{stars}</p>
            <p className="detail-detail">Genre: {movieData.genre}</p>
            <p className="detail-detail">Description: {movieData.desc}</p>
        </div>
    );
}

export default DetailPage;
