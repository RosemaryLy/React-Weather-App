import React from 'react';
import './App.css';
import WeatherFetch from "./weatherFetch.js"

function App() {
  return (
    <div id="bg">
    <img src="Torontocityscape.jpg" alt="Toronto City Scape"></img>
    <div class="child">
      <WeatherFetch/>
      </div>
      </div>
  );
}

export default App;