import React from 'react';
import Lottery from './Lottery';
import './App.css';

function App() {
  return (
    <div className = "App">
       <Lottery/>
       <Lottery title = "Lottery 2" maxNum = {10} maxBalls = {3} />
       <Lottery title = "bumper lottery" maxnum = {100} maxBalls = {14} />
    </div>
  );
}

export default App;
