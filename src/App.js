import React, { Component } from "react";
import Vuelos from "./componentes/Vuelos";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header"
import PasajerosPago from "./componentes/PasajerosPago"
import Resumenfinal from './componentes/resumenFinal'

class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Vuelos />
        <PasajerosPago />
        <Resumenfinal />
        <Footer />
      </div>
    );
  }
}

export default App;
