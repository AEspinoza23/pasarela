import React, { Component } from 'react'
import {MDBRow, MDBCol, MDBNavbar, } from 'mdbreact'
import LogoConviasa from "./img/logo.svg"
import BanderaV from "./img/venezuela.png"
import { HideAt } from 'react-with-breakpoints';
import { Progress } from 'reactstrap';
import "./index.css"



class index extends Component {
  render() {
    return (
      <div>
        <MDBNavbar fixed="top" className="colorConviasa">
          <MDBCol sm="12" lg="2" className="text-center">
            <img src={LogoConviasa} alt="logo" />
          </MDBCol>
          <HideAt breakpoint="largeAndBelow">
            <MDBCol md="6" className="ml-5">
              <Progress multi>
                <Progress bar value="30">Vuelos</Progress>
                <Progress bar value="0">Pasajeros y Pago</Progress>
                <Progress bar value="0">Final</Progress>
              </Progress>
            </MDBCol>
          </HideAt>
          <HideAt breakpoint="largeAndBelow">
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