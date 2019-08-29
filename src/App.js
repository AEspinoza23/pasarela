import React, { Component } from "react";
import Vuelos from "./componentes/Vuelos";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header"
import PasajerosPago from "./componentes/PasajerosPago"

class App extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <Vuelos />
        <PasajerosPago/>
        <Footer/>
      </div>
    );
  }
}

export default App;
