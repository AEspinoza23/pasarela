import React, { Component } from 'react'
import { 
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBCollapse,
  MDBIcon
} from "mdbreact";
import "../index.css";
import BancoTesoro from "./Header/img/tesoro.png"
import Bod from "./Header/img/bod.png"
import Activo from "./Header/img/activo.png" 

class PasajerosPago extends Component {

  state = {
    collapseID: true
  }
  
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  }

  render() {
    return (
      <div>
        <MDBRow around className="mt-5">
          <MDBCol sm="8">
            <MDBRow>
              <MDBCol>
                <MDBRow className="colorConviasa py-3 mb-1">
                  <strong className="ml-4 white-text h5">Datos de Pasajero</strong> 
                </MDBRow>
                <MDBRow className="colorConviasa py-3" onClick={this.toggleCollapse("DatosAdulto")} between>
                  <MDBCol md="6">
                    <strong className="ml-4 text-left h5 white-text">Introduzca los datos del pasajero (Adulto)</strong>
                  </MDBCol>
                  <MDBCol md="1">
                    <MDBIcon icon="angle-down" size="2x" className="white-text"/>
                  </MDBCol>
                </MDBRow>
               
                  <MDBCollapse id="DatosAdulto" isOpen={this.state.collapseID} color="white" className="mt-1">
                    <MDBRow className="colorConviasa z-depth-2 mx-1">
                      <p className="ml-3 h5 white-text">Datos Adulto 1</p>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol></MDBCol>
                    </MDBRow>
                  </MDBCollapse>
               
                <MDBRow id="accent" between>
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-4">
              <MDBCol>
                <MDBRow className="colorConviasa py-4">
                  <MDBCol>
                    <MDBRow center >
                      <input type="radio" className="mr-2 mt-1"/><p>Tarjeta de Débito</p>
                      <input type="radio" className="ml-3 mr-2 mt-1"/><p className="mr-4">Transferencia</p>
                      <input type="radio" className="mr-2 mt-1"/><p>Petro Pago</p>
                    </MDBRow>
                    <MDBRow >
                      <strong className="h5 white-text ml-3">Seleccione Banco</strong>    
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
                <MDBRow  start className="py-3 colorAccent">
                  <MDBCol sm="12" lg="2" className="mt-3">
                    <input type="radio" className="mr-2 mt-1"/><img src={BancoTesoro} style={{width:"90px", height:"40px"}} alt=""/>
                  </MDBCol>
                  <MDBCol sm="12" lg="2" className="mt-3">
                    <input type="radio" className="ml-3 mr-2 mt-1"/><img src={Bod} style={{width:"80px", height:"40px"}} className="mr-3" alt=""/>
                  </MDBCol>
                  <MDBCol sm="12" lg="3" className="mt-3">
                    <input type="radio" className="mr-2 mt-1"/><img src={Activo} style={{width:"180px", height:"40px"}} alt=""/>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="colorAccent ">
                  <MDBCol md="4">
                    <MDBInput type="text" label="Nombre Titular" />
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBInput type="text" label="Apellido Titular" />
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBInput type="text" label=" Email del Titular" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="colorAccent">
                  <MDBCol md="4">
                    <MDBInput type="number" label="Cédula"/>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBInput type="number" label="N° de Teléfono"/>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              <MDBBtn block color="grey">Continuar</MDBBtn>
            </MDBRow>
          </MDBCol>
          <MDBCol sm="4">
            <MDBRow>
              <MDBCol>
                <MDBBtn block color="orange">Salir</MDBBtn>
              </MDBCol>
              <MDBCol>
                <MDBBtn block color="orange">Regresar</MDBBtn>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-1" id="primary">
              Su selección
            </MDBRow>
            <MDBRow id="secondary">
              <MDBCol>
                <MDBBtn block color="orange">Reservar</MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}

export default PasajerosPago
