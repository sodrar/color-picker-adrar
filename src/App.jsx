import { useState } from 'react';
import './App.css';
import img from './assets/plot.png'

export function App() {

  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(95);

  const colorPickStyle = {
    height: 100,
    width: 100,
    backgroundColor: "rgba(" + red + "," + green + "," + blue + ")",
    margin: "auto",
    marginBottom: 30
  };

  function updateRed(event) {
    setRed(event.target.value);
  }

  function updateGreen(event) {
    setGreen(event.target.value);
  }

  function updateBlue(event) {
    setBlue(event.target.value)
  }

  return (
    <div>
      <h1>Color picker</h1>
      <div style={colorPickStyle}>

      </div>
      <div className='range-container'>
        <span>Red</span>
        <input type="range" onInput={updateRed} min="0" max="255" />
        <span>Green</span>
        <input type="range" onInput={updateGreen} min="0" max="255" />
        <span>Blue</span>
        <input type="range" onInput={updateBlue} min="0" max="255" />
      </div>
    </div>
  )
};

