import React from "react";
import ListaItem from "./ListaItem.jsx";

export default class Menu extends React.Component{
    render(){
        let arregloItems = this.props.elementosLista.map(
        (textoElemento) =>{
            return <ListaItem textoItem= {textoElemento}/>
            
        });
        
        return(
        <ul>   
         <h1>{this.props.tituloLista}</h1>
         {arregloItems}
        </ul> 
        );
        
    }
};


/*return(
       <div>
            <ul>
               <ListaItem titulo= "SUPERMERCADO"/>
                <ListaItem textItem = "Arroz"/>
                <ListaItem textItem = "Carne"/>
            </ul>
            <ul>
                <ListaItem titulo= "PERROS"/>
                <ListaItem textItem = "Chihuhuño"/>
                <ListaItem textItem = "Akita"/>
                <ListaItem textItem = "Bulldog"/>
            </ul>
            <ul>
                <ListaItem titulo= "CARROS"/>
                <ListaItem textItem = "VW"/>
                <ListaItem textItem = "DODGE"/>
            </ul>
        
        </div>   
        );*/