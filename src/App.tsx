import React from 'react';
import logo from './logo.svg';
import './App.css';
import MacroBird from "./photos/macroBird.png" 


function App() {

  let helleWorld: string | number
  helleWorld = "Hello World"
  let antallDyr: number = 2 + 2;

  return (
    <div className="App">
      <h1 className="App-header">{helleWorld}</h1>
      <p>🐦 { antallDyr } stk</p>
     
      <img src={logo} alt="logo" className="App-logo"/> 
      <img src={MacroBird} alt="bird" className="App-logo"/>
      <img src={logo} alt="logo" className="App-logo"/>
      
    </div>
  );
}



export default App;
