import React from "react";
import "./RoverCard.css";

export default function RoverCard(props) {
    return (
        <div className="roverContainerBig" onClick={props.onClick}>
            <h2 id="roverTitle">{props.name}</h2>
            <div className="roverDescriptionBig">
                <p>Status: {props.status}</p>
                <p>Max Sol: {props.max_sol}</p>
                <p>Total Photos: {props.total_photos}</p>
            </div>
        </div>
    );
}
