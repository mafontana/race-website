import React from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VenueInfo from './components/venueInfo'

function App() {
  return (
    <div className="App">
    <Header />
    <Featured />
    <VenueInfo />
    </div>
  );
}

export default App;
