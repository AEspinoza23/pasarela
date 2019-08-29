import React, { Component } from "react";
import Vuelos from "./componentes/Vuelos";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header"

class App extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <Vuelos />
        <Footer/>
      </div>
    );
  }
}

export default App;
