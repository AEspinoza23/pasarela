import React, { Component } from 'react'
import { 
  MDBRow,
  MDBCol,
  MDBBtn
} from "mdbreact";
import "../index.css";
import BancoTesoro from "./Header/img/tesoro.png"
import Bod from "./Header/img/bod.png"
import Activo from "./Header/img/activo.png" 

class PasajerosPago extends Component {
  render() {
    return (
      <div>
        <MDBRow around className="mt-5">
          <MDBCol sm="8">
            <MDBRow>
              <MDBCol>
                <MDBRow id="primary">
                  <strong>Datos de Pasajero</strong> 
                </MDBRow>
                <MDBRow id="secondary">
                  <strong>Introduzca los datos del pasajero (Adulto)</strong>
                </MDBRow>
                <MDBRow id="accent" between>
                  
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-4">
              <MDBCol>
                <MDBRow id="primary">
                  <MDBCol>
                    <MDBRow center>
                      <input type="radio" className="mr-2 mt-1"/><p>Tarjeta de Débito</p>
                      <input type="radio" className="ml-3 mr-2 mt-1"/><p className="mr-4">Transferencia</p>
                      <input type="radio" className="mr-2 mt-1"/><p>Petro Pago</p>
                    </MDBRow>
                    <MDBRow >
                      <strong>Seleccione Banco</strong> 
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
                <MDBRow id="accent" start>
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
              </MDBCol>
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
