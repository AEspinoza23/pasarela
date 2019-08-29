import React, { Component } from 'react'
import {MDBRow, MDBCol, MDBNavbar, } from 'mdbreact'
import { Progress } from 'reactstrap'
import LogoConviasa from "./img/logo.svg"
import BanderaV from "./img/venezuela.png"
import { HideAt } from 'react-with-breakpoints';

class index extends Component {
  render() {
    return (
      <div>
        <MDBNavbar fixed="top " className="colorConviasa">
          <MDBCol md="2" className="text-center">
            <img src={LogoConviasa} alt="logo" />
          </MDBCol>
          <MDBCol md="7">
          <HideAt breakpoint="mediumAndBelow">
            <Progress multi style={{height:"2em"}}>
              <Progress bar className="green" value="30"><p className="h5 mt-2">Vuelos</p></Progress>
              <Progress bar className="green" value="30"><p className="h5 mt-2">Pasajeros y Pago</p></Progress>
              <Progress bar className="green" value="40" ><p className="h5 mt-2">Final</p></Progress>
            </Progress>
          </HideAt>
          </MDBCol>
          <HideAt breakpoint="mediumAndBelow">
            <MDBCol md="2">
              <MDBRow>
                <MDBCol size="1">
                  <img src={BanderaV} alt="Contacto"/>
                </MDBCol>
                <MDBCol>
                <strong className="white-text">05002668427</strong>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </HideAt>
        </MDBNavbar>
      </div>
    )
  }
}

export default index