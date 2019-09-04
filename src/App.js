import React, { Component } from "react";
import Vuelos from "./componentes/Vuelos";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header"
import PasajerosPago from "./componentes/PasajerosPago"
import Resumenfinal from './componentes/resumenFinal'
import { MDBContainer } from 'mdbreact';

class App extends Component {
  
  render() {
    return (
      <MDBContainer fluid>
        <Header />
        <Vuelos />
        <PasajerosPago />
        <Resumenfinal />
        <Footer />
      </MDBContainer>
    );
  }
}

export default App;
