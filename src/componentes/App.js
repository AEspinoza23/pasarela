import React, { Component } from "react";
  

import Content from "./Global/Content"
import Footer from "./Global/Footer";
import Header from "./Global/Header";

class App extends Component {

  render() {

    const { children } = this.props;
    let { isFetch } = this.props;
    console.log(isFetch)
    return (
      <div>
        <Header/>
        <Content body={ children } />
        <Footer />
      </div>
    );
  }
}

export default App;
