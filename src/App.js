import React from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VenueInfo from './components/venueInfo'
import Highlight from './components/highlights'
import Pricing from './components/pricing'

function App() {
  return (
    <div className="App">
    <Header />
    <Featured />
    <VenueInfo />
    <Highlight />
    <Pricing />
    </div>
  );
}

export default App;
