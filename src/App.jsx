import React, { Component } from 'react'
import Button from './Button'
import "./App.css";

export default class App extends Component {
  colors = ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]


   /*Aqui deberan hacer una funcion que me retorne un nuevo arreglo con los
   colores mezclados*/
  
  render() {
    return (
      <div className="container">
        <div className="panel">
          {this.colors.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={"Recibe una funcion"} />
      </div>

    )
  }
}
