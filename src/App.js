import React from 'react';
import './App.css';
import WeatherFetch from "./weatherFetch.js"

function App() {
  return (
    <div className="parent">
      <div className="child">
      <WeatherFetch/>
      </div>
    </div>
  );
}

export default App;