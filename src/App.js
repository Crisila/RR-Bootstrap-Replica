import React from 'react';
import './App.css';
import topBar from './components/topBar';
import storeListings from './components/storeListings';
import Background from './components/background';





function App() {
  return (
    <div className="App">
      {topBar()}
      {Background()}
      {storeListings()}
    </div>
  );
}

export default App;
