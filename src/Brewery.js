import React from 'react';
import './Brewery.css';

function Brewery({ brewery }) {
  return (
    <div className="Brewery">
      <h3>{brewery.name}</h3>
      <p>Type: {brewery.brewery_type}</p>
      <p>City: {brewery.city}</p>
      <p>State: {brewery.state}</p>
    </div>
  );
}

export default Brewery;
