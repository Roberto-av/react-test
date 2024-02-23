import React from "react";
import "./App.css";

function CardFormate({ imageUrl, title, description, buttonText }) {
  return (
    <div className="card">
      <img
        src={imageUrl}
        className="card-img-top"
        alt="Card"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="card-btn">{buttonText}</button>
      </div>
    </div>
  );
}

export default CardFormate;
