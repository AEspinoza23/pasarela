import React, { Component } from "react";
  

import Content from "./Global/Content"
import Footer from "./Global/Footer";
import Header from "./Global/Header";
import { MDBContainer } from "mdbreact";

class App extends Component {

  render() {

    const { children } = this.props;
    let { isFetch } = this.props;
    console.log(isFetch)
    return (
      <MDBContainer fluid>
        <Header/>
        <Content body={ children } />
        <Footer />
      </MDBContainer>
    );
  }
}

export default App;
