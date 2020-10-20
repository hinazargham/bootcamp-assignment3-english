import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./hello.js";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          <h1><b>BOOTCAMP2020</b></h1>
          <h2>ASSIGNMENT no. {props.session - 1} ({props.class} Class) </h2>
          <h3>REACT TUTORIAL by {props.teachers}</h3>
        </p>

        <Hello myname="Hina Zargham" myhello="hello.js"></Hello>
        <img src={logo} className="App-logo" alt="logo" width="250" />
     
      </header>
    </div>
  );
}

export default App;
