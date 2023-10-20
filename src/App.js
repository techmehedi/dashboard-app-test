import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import './App.css';

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
      <Dashboard 
        breweries={breweries} 
        search={search} 
        setSearch={setSearch} 
        filter={filter} 
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
