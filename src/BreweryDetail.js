import React from 'react';
import { useParams } from 'react-router-dom';

function BreweryDetail({ breweries }) {
  const { id } = useParams();
  const brewery = breweries.find(brewery => brewery.id === id);

  if (!brewery) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{brewery.name}</h1>
      <p>{brewery.street}</p>
      <p>{brewery.city}, {brewery.state} {brewery.postal_code}</p>
      <p>{brewery.phone}</p>
      <p>{brewery.website_url}</p>
    </div>
  );
}

export default BreweryDetail;
