import React from 'react';
import logo from './logo.svg';
import './App.css';
/* import MacroBird from "./photos/macroBird.png"; */
import {Hello} from './components/Hello';
import {Sunshine} from './components/Sunshine'
import { ClickHandler } from './components/ClickHandler';
import {ParentComponent} from './components/ParentComponent';
import {UserGreeting} from './components/UserGreeting';
import {WeatherList} from  './components/WeatherList';
/* import {Stylesheet} from './components/Stylesheet'; Deleted, don't need it?*/
import {Form} from './components/Form';
import {PostList} from './components/PostList';
import {PostForm} from './components/PostForm';
import { DataQuery } from './components/DataQuery'; 
import { IfCounter } from './components/IfCounter';

function App() {

  let helleWorld: string | number
  helleWorld = "Hello World"
  let antallDyr: number = 1;
  const firstBird = {
    name: "Molly",
    food: "seeds",
    favoritePlace: "sky"
  }
  
  return (
    <div className="App">
      <div className='App-header'>
        <h1 className="App-header">{helleWorld}</h1>
        <h2 className='primary'>Some text</h2>
        {<p> { antallDyr } 🐦 , one is called {firstBird.name}. Her favorite food is {firstBird.food}</p>}
        <Hello name='Molly' lastName='McDolly'> <h6>Hope you get a nice day!</h6></Hello>
        <Sunshine />
      </div>
      <div>
        <img src={logo} alt="logo" className="App-logo"/> 
     {/*    <img src={MacroBird} alt="bird" className="App-logo"/> */}
        <img src={logo} alt="logo" className="App-logo"/> 
        {(antallDyr >= 2) &&
         <img src={logo} alt="logo" className="App-logo"/>
        } 
        <div className='InRowDiv'> 
          <ClickHandler/>
          <ParentComponent/>
          <UserGreeting/>
          <WeatherList/>
         {/*   <Stylesheet/> */}
           <Form /* className='testForm' Her blir hele form påvirket, både knapp og input*//>
        </div>
        <div>
          <PostList/>
          <PostForm/>
          <DataQuery/>
          <IfCounter/>
        </div>
       

        <a href="http://www.google.com" target="_blank" rel="noopener noreferrer"> Google search page</a>
      </div>
    </div>
  );
}



export default App;
