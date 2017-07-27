import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu.jsx";

class App extends Component {
    constructor(){
        super();
        this.state = {nuevoItemTexto:"", arregloDeItems:[]}
        this.manejarCambio = this.manejarCambio.bind(this);
        this.agregarALista = this.agregarALista.bind(this);
    }

    agregarALista(){
    this.state.arregloDeItems.push(this.state.nuevoItemTexto);
    this.setState({nuevoItemTexto:""})
    }

    manejarCambio(event){
        let inputValue = event.target.value;
        this.setState({nuevoItemTexto:inputValue});
    }

  render() {
    return (
      <div className="App">
        <input value={this.state.nuevoItemTexto} type="text" onChange = {this.manejarCambio}/>
        <button onClick={this.agregarALista} >ENVIAR</button>
        
       <Menu tituloLista="Super" elementosLista= {this.state.arregloDeItems}/>
    
        </div>
        
        
        
     
      
    );
  }
}

export default App;
