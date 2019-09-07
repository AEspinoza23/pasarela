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
        <MDBNavbar fixed="top " className="colorConviasa">
          <MDBCol md="2" className="text-center">
            <img src={LogoConviasa} alt="logo" />
          </MDBCol>
          <MDBCol md="7">
          <HideAt breakpoint="largeAndBelow">
            <Progress multi>
              <Progress bar value="15">Vuelos</Progress>
              <Progress bar color="success" value="30">Pasajeros y Pago</Progress>
              <Progress bar color="info" value="25">Final</Progress>
            </Progress>
          </HideAt>
          </MDBCol>
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