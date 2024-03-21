// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Side from './Side.js'
import Bottom from './Bottom.js';
import Truse from './Truse.js';
import React, { useState } from 'react';

function App() {

  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleValue = () => {
    setIsToggleOn(!isToggleOn); 
  };

  

  return (
    <div className="App">
    <button className='btn1' onClick={toggleValue}>True Sentiments</button>
     <Header />
     {isToggleOn ? <Main />: <Truse/>}
     <Side />
     <Bottom />
    </div>
  );
}

export default App;
