import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">

       <Menu tituloLista="Super" elementosLista = {["pera", "berenjena"]}/>
       <Menu tituloLista="Carros" elementosLista = {["VW" , "Jeep", "Corvette" ]}/>    
        
        
        
     
      </div>
    );
  }
}

export default App;
