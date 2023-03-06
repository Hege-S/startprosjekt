import React from 'react';
import logo from './logo.svg';
import './App.css';
import MacroBird from "./photos/macroBird.png" 
import {Hello} from './components/Hello'


function App() {

  let helleWorld: string | number
  helleWorld = "Hello World"
  let antallDyr: number = 2 + 2;
  const firstBird = {
    name: "Molly",
    food: "Seeds",
    favoritePlace: "Sky"
  }
  
  return (
    <div className="App">
      <header className='App-header'>
        <h1 className="App-header">{helleWorld}</h1>
        {<p> 🐦 { antallDyr } birds, first is called {firstBird.name}. Her favorite food is {firstBird.food}</p>}
        <Hello name='Molly' lastName='McDolly'> <h6>Hope you get a nice day!</h6><button>sunshine</button></Hello>
      </header>
      <body>
        <img src={logo} alt="logo" className="App-logo"/> 
        <img src={MacroBird} alt="bird" className="App-logo"/>
        <img src={logo} alt="logo" className="App-logo"/> 
        {/* if({antallDyr >= 2}){
         <img src={logo} alt="logo" className="App-logo"/>
        } Spørre hvordan jeg gjør if her.*/}
        <a href="http://www.google.com" target="_blank" rel="noopener noreferrer"> Google search page</a>
      </body>
    </div>
  );
}



export default App;
