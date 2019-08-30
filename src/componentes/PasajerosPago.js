import React, { Component } from 'react'
import { 
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBCollapse,
  MDBIcon,
  MDBInputGroup
} from "mdbreact";
import "../index.css";
import BancoTesoro from "./Header/img/tesoro.png"
import Bod from "./Header/img/bod.png"
import Activo from "./Header/img/activo.png" 

class PasajerosPago extends Component {

  state = {
    collapseIDAdulto: true,
    collapseIDNino: true,
    collapseIDInfante: true,
    collapseTasasyRecargos: true
  }
  
  toggleCollapseAdulto = collapseIDAdulto => () => {
    this.setState(prevState => ({
      collapseIDAdulto: prevState.collapseIDAdulto !== collapseIDAdulto ? collapseIDAdulto : ""
    }));
  }

  toggleCollapseNino = collapseIDNino => () => {
    this.setState(prevState => ({
      collapseIDNino: prevState.collapseIDNino !== collapseIDNino ? collapseIDNino : ""
    }));
  }

  toggleCollapseInfante = collapseIDInfante => () => {
    this.setState(prevState => ({
      collapseIDInfante: prevState.collapseIDInfante !== collapseIDInfante ? collapseIDInfante : ""
    }));
  }

  toggleCollapseTasasyRecargos = collapseTasasyRecargos => () => {
    this.setState(prevState => ({
      collapseTasasyRecargos: prevState.collapseTasasyRecargos !== collapseTasasyRecargos ? collapseTasasyRecargos : ""
    }));
  }

  render() {
    return (
      <div>
        <MDBRow around className="mt-5">
          <MDBCol sm="8">
            <MDBRow>
              <MDBCol className="colorAccent">
                <MDBRow className="colorConviasa py-3 mb-1">
                  <strong className="ml-4 white-text h5">Datos de Pasajero</strong> 
                </MDBRow>
                <MDBRow className="colorConviasa py-3" onClick={this.toggleCollapseAdulto("DatosAdulto")} between>
                  <MDBCol md="6">
                    <strong className="ml-4 text-left h5 white-text">Introduzca los datos del pasajero (Adulto)</strong>
                  </MDBCol>
                  <MDBCol md="1">
                    <MDBIcon icon="angle-down" size="2x" className="white-text"/>
                  </MDBCol>
                </MDBRow>
                {/* Collapse Adultos */}
                <MDBCollapse id="DatosAdulto" isOpen={this.state.collapseIDAdulto} className="mt-1 white">
                  <MDBRow className="colorConviasa z-depth-1 mx-1">
                    <p className="ml-3 h5 white-text">Datos Adulto 1</p>
                  </MDBRow>
                  <MDBRow className="mt-3 mx-2">
                    <MDBCol md="3">
                    <MDBInputGroup
                      containerClassName="ml-3 mt-4"
                      inputs={
                        <select className="browser-default custom-select">
                          <option value="0">Titulo</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      }
                    />
                    </MDBCol>
                    <MDBCol md="3">
                      <MDBInput type="text" label="Primer Nombre" />
                    </MDBCol>
                    <MDBCol md="3">
                      <MDBInput type="text" label="Segundo Nombre" />
                    </MDBCol>
                    <MDBCol md="3">
                      <MDBInput type="text" label="Primer Apellido" />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mx-2">
                    <MDBCol md="6">
                    <MDBInputGroup
                      containerClassName="ml-3 mt-4"
                      inputs={
                        <select className="browser-default custom-select">
                          <option value="0">Nacionalidad</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      }
                    />
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput type="number" label="Cedula de Identidad" />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mx-2">
                    <MDBCol md="4">
                    <MDBInputGroup
                      containerClassName="ml-3 mt-4"
                      inputs={
                        <select className="browser-default custom-select">
                          <option value="0">Código Teléfono del País</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      }
                    />
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBInput type="number" label="Código de área" />
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBInput type="number" label="N° Telefono" />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mx-2">
                    <MDBCol md="6">
                      <MDBInput type="date"/>
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput type="email" label="E-mail" />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mx-2">
                    <MDBCol md="6">
                      <MDBInput type="text" label="Confirmar E-mail"/>
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput type="text" label="Ciudad" />
                    </MDBCol>
                  </MDBRow>
                </MDBCollapse>
                <MDBRow className="py-3">
                </MDBRow>
                {/* fin Collapse Adulto */}
                <MDBRow className="colorConviasa py-3" onClick={this.toggleCollapseNino("DatosNino")} between>
                  <MDBCol md="6">
                    <strong className="ml-4 text-left h5 white-text">Introduzca los datos del pasajero (Niño)</strong>
                  </MDBCol>
                  <MDBCol md="1">
                    <MDBIcon icon="angle-down" size="2x" className="white-text"/>
                  </MDBCol>
                </MDBRow>
                {/* Collapse Nino */}
                <MDBCollapse id="DatosNino" isOpen={this.state.collapseIDNino} className="mt-1 white">
                  <MDBRow className="colorConviasa z-depth-1 mx-1">
                    <p className="ml-3 h5 white-text">Datos niño</p>
                  </MDBRow>
                  <MDBRow className="mt-3 mx-2">
                    <MDBCol md="4">
                      <MDBInput type="text" label="Primer Nombre" />
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBInput type="text" label="Segundo Nombre" />
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBInput type="text" label="Primer Apellido" />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mx-2">
                    <MDBCol md="6">
                      <MDBInputGroup
                        containerClassName="ml-3 mt-4"
                        inputs={
                          <select className="browser-default custom-select">
                            <option value="0">Nacionalidad</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        }
                      />
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput type="number" label="Pasaporte" />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mx-2">
                    <MDBCol md="6">
                      <MDBInput type="date"/>
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput type="date"/>
                    </MDBCol>
                  </MDBRow>
                </MDBCollapse>
                <MDBRow className="py-3">
                </MDBRow>
                {/* finCollapse Nino */}
                <MDBRow className="colorConviasa py-3" onClick={this.toggleCollapseInfante("DatosInfante")} between>
                  <MDBCol md="6">
                    <strong className="ml-4 text-left h5 white-text">Introduzca los datos del pasajero (Infante)</strong>
                  </MDBCol>
                  <MDBCol md="1">
                    <MDBIcon icon="angle-down" size="2x" className="white-text"/>
                  </MDBCol>
                </MDBRow>
                {/* Collapse Infantes */}
                <MDBCollapse id="DatosInfante" isOpen={this.state.collapseIDInfante} className="mt-1 white">
                  <MDBRow className="colorConviasa z-depth-1 mx-1">
                    <p className="ml-3 h5 white-text">Datos Infantes</p>
                  </MDBRow>
                  <MDBRow className="mt-3 mx-2">
                    <MDBCol md="4">
                      <MDBInput type="text" label="Primer Nombre" />
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBInput type="text" label="Segundo Nombre" />
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBInput type="text" label="Primer Apellido" />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mx-2">
                    <MDBCol md="6">
                      <MDBInputGroup
                        containerClassName="ml-3 mt-4"
                        inputs={
                          <select className="browser-default custom-select">
                            <option value="0">Nacionalidad</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        }
                      />
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput type="number" label="Pasaporte" />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mx-2">
                    <MDBCol md="6">
                      <MDBInput type="date"/>
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput type="date"/>
                    </MDBCol>
                  </MDBRow>
                </MDBCollapse>
                <MDBRow className="py-3">
                </MDBRow>
                {/* fin Collapse Infantes */}
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-4">
              <MDBCol>
                <MDBRow className="colorConviasa py-4">
                  <MDBCol>
                    <MDBRow center >
                      <input type="radio" className="mr-2 mt-1 white-text"/><p>Tarjeta de Débito</p>
                      <input type="radio" className="ml-3 mr-2 mt-1"/><p className="mr-4">Transferencia</p>
                      <input type="radio" className="mr-2 mt-1"/><p>Petro Pago</p>
                    </MDBRow>
                    <MDBRow >
                      <strong className="h5 white-text ml-3">Seleccione Banco</strong>    
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
                <MDBRow  start className="py-3 white">
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
                <MDBRow className="white">
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
                <MDBRow className="white">
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
              <strong className="h5">Desglose</strong>
            </MDBRow>
            <MDBRow id="accent"  className="pt-3">
              <MDBCol  className="border-bottom border-dark">
                <strong>Boleto Adultos</strong>
              </MDBCol>
              <MDBCol  className="border-bottom border-dark">
                <p>(x1)</p>
              </MDBCol>
            </MDBRow>
            <MDBRow id="accent"  className="colorAccent">
              <MDBCol className="border-bottom border-dark">
                <strong>Boleto Adultos</strong>
              </MDBCol>
              <MDBCol className="border-bottom border-dark">
                <p>(x1)</p>
              </MDBCol>
            </MDBRow>
            <MDBRow id="accent"  className="colorAccent">
              <MDBCol>
                <strong>Boleto Adultos</strong>
              </MDBCol>
              <MDBCol>
                <p>(x1)</p>
              </MDBCol>
            </MDBRow>
            <MDBRow id="primary" onClick={this.toggleCollapseTasasyRecargos("TasasyRecargos")} between>
              <MDBCol md="5">
                <strong className=" h5 white-text">Tasas y Recargos</strong>
              </MDBCol>
              <MDBCol md="1">
                <MDBIcon icon="angle-down" size="2x" className="white-text"/>
              </MDBCol>
            </MDBRow>
            <MDBCollapse id="TasasyRecargos" isOpen={this.state.collapseTasasyRecargos} className="mt-1 white">
              <MDBRow id="primary">
                <MDBCol className="border-bottom border-light">
                  <MDBRow end><p className="h6">*AJ</p></MDBRow>
                  <MDBRow end><p className="h6">*AK</p></MDBRow>
                  <MDBRow end><p className="h6">*C2</p></MDBRow>
                  <MDBRow end><p className="h6">*E2</p></MDBRow>
                  <MDBRow end><p className="h6">*EU</p></MDBRow>
                  <MDBRow end><p className="h6">*QB</p></MDBRow>
                  <MDBRow end><p className="h6">*QI</p></MDBRow>
                  <MDBRow end><p className="h6">*WT</p></MDBRow>
                  <MDBRow end><p className="h6">*YQ</p></MDBRow>
                </MDBCol>
                <MDBCol className="border-bottom border-light">
                  <MDBRow center><p className="h6">44.4 USD</p></MDBRow>
                  <MDBRow center><p className="h6">44.4 USD</p></MDBRow>
                  <MDBRow center><p className="h6">44.4 USD</p></MDBRow>
                  <MDBRow center><p className="h6">44.4 USD</p></MDBRow>
                  <MDBRow center><p className="h6">44.4 USD</p></MDBRow>
                  <MDBRow center><p className="h6">44.4 USD</p></MDBRow>
                  <MDBRow center><p className="h6">44.4 USD</p></MDBRow>
                  <MDBRow center><p className="h6">44.4 USD</p></MDBRow>
                  <MDBRow center><p className="h6">44.4 USD</p></MDBRow>
                </MDBCol>
              </MDBRow>
              <MDBRow className="colorConviasa caja pb-2">
                <MDBCol>
                  <MDBRow end>
                    <p className="white-text h6">Total</p>
                  </MDBRow>
                </MDBCol>
                <MDBCol>
                  <MDBRow center>
                    <p className="white-text h6">540.00 USD</p>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBCollapse>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}

export default PasajerosPago
