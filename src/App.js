import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import BreweryDetail from './BreweryDetail';

function App() {
  const [breweries, setBreweries] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.openbrewerydb.org/breweries');
      const data = await response.json();
      setBreweries(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard 
          breweries={breweries} 
          search={search} 
          setSearch={setSearch} 
          filter={filter} 
          setFilter={setFilter}
        />} />
        <Route path="/brewery/:id" element={<BreweryDetail />} />
      </Routes>
    </div>
  );

}

export default App;
