import React from 'react';
import './Filter.css';

function Filter({ setFilter }) {
  return (
    <select className="Filter" onChange={e => setFilter(e.target.value)}>
      <option value="">All Types</option>
      <option value="micro">Micro</option>
      <option value="nano">Nano</option>
      <option value="regional">Regional</option>
      <option value="brewpub">Brewpub</option>
    </select>
  );
}

export default Filter;
