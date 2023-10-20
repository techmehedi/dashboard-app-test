import React from 'react';
import './SearchBar.css';

function SearchBar({ setSearch }) {
  return (
    <input 
      className="SearchBar" 
      type="text" 
      placeholder="Search breweries..." 
      onChange={e => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
