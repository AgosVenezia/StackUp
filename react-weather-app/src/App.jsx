import React, { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import Weather from './components/Weather.jsx'

function App() {
  const [location, setLocation] = useState('');

  const handleSearch = (newLocation) => {
    setLocation(newLocation);
  }

  return (
    <div className="min-h-screen flex flex-col gap-20 bg-gradient-to-br from-white to-zinc-200">
      <SearchBar onSearch={handleSearch}/>
      {!(location === '') && <Weather location={location}/>}
    </div>
  )
};

export default App;