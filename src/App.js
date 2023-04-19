import React from 'react'
import './App.css';
import Image from './Image/div_back.jpg'

function App() {


  const panels = document.querySelectorAll('.panel')

  panels.forEach(panel => {
      panel.addEventListener('click', () => {
          removeActiveClasses()
          panel.classList.add('active')
      })
  })
  
  function removeActiveClasses() {
      panels.forEach(panel => {
          panel.classList.remove('active')
      })
  }

  return (
    <div className="App">
      <div>
        <div style={{ backgroundImage: `url(${Image})` }}></div>
        <button type='previous'>pre</button>
        <button type='next'>pre</button>
        <div className="container">
          <div
            className="panel active"
            style={{backgroundImage: `url(${Image})`}}
          >
            <h3>Explore The World</h3>
          </div>
          <div
            className="panel"
            style={{backgroundImage: `url(${Image})`}}
          >
            <h3>Wild Forest</h3>
          </div>
          <div
            className="panel"
            style={{backgroundImage: `url(${Image})`}}
          >
            <h3>Sunny Beach</h3>
          </div>
          <div
            className="panel"
            style={{backgroundImage: `url(${Image})`}}
          >
            <h3>City on Winter</h3>
          </div>
          <div
            className="panel"
            style={{backgroundImage: `url(${Image})`}}
          >
            <h3>Mountains - Clouds</h3>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default App;
