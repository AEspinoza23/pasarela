import React, { Component } from 'react'
import {MDBRow, MDBCol, MDBNavbar, } from 'mdbreact'
import { Progress } from 'reactstrap'
import LogoConviasa from "./img/logo.svg"
import BanderaV from "./img/venezuela.png"

class index extends Component {
  // stepper
  
  // fin stepper
  render() {
    return (
      <div>
        <MDBNavbar fixed="top " className="colorConviasa">
          <MDBCol md="2" className="text-center">
            <img src={LogoConviasa} alt="logo" />
          </MDBCol>
          <MDBCol md="7">
          <Progress multi style={{height:"2em"}}>
            <Progress bar className="green" value="30"><p className="h5 mt-2">Vuelos</p></Progress>
            <Progress bar className="green" value="30"><p className="h5 mt-2">Pasajeros y Pago</p></Progress>
            <Progress bar className="green" value="30" ><p className="h5 mt-2">Final</p></Progress>
          </Progress>
          </MDBCol>
          <MDBCol md="2">
            <MDBRow>
              <MDBCol size="1">
                <img src={BanderaV} alt="Contacto"/>
              </MDBCol>
              <MDBCol>
              <p className="white-text">05002668427</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBNavbar>
      </div>
    )
  }
}

export default index