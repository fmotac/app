// Card.js
import React from 'react';

const Card = ({ title, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} style={{width:'200px'}}/>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
