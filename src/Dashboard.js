import React from 'react';
import Brewery from './Brewery';
import SearchBar from './SearchBar';
import Filter from './Filter';
import './Dashboard.css';

function Dashboard({ breweries, search, setSearch, filter, setFilter }) {
  const filteredBreweries = breweries.filter(brewery => 
    brewery.name.toLowerCase().includes(search.toLowerCase()) && 
    brewery.brewery_type === filter
  );

  return (
    <div className="Dashboard">
      <SearchBar setSearch={setSearch} />
      <Filter setFilter={setFilter} />
      <h2>Total Breweries: {breweries.length}</h2>
      {filteredBreweries.map(brewery => 
        <Brewery key={brewery.id} brewery={brewery} />
      )}
    </div>
  );
}

export default Dashboard;
