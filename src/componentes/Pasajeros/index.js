import React, { Component } from 'react'
import { 
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBCollapse,
  MDBIcon,
  MDBInputGroup
} from "mdbreact"
import "../../index.css"
import { Link } from 'react-router-dom'
import { SelectorPagos } from './FormularioPagos'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { datosVuelo: state.vuelo }
}

class pasajeros extends Component {

  state = {
    collapseIDAdulto: true,
    collapseIDNino: true,
    collapseIDInfante: true,
    collapseTasasyRecargos: true,    
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

  componentDidMount(){
    console.log(this.props.datosVuelo)
  }

  render() {
    return (
      <div  className="marginTop">
        <MDBRow around className="mt-5 caja">
          <MDBCol sm="8" md="12" lg="8">
            <MDBRow>
              <MDBCol className="colorAccent">
                <MDBRow className="colorConviasa caja py-3 mb-1">
                  <strong className="white-text h5 ml-3">Datos de Pasajero</strong> 
                </MDBRow>
                <MDBRow className="colorConviasa caja py-3 " between>
                  <strong className="text-left h5 white-text ml-3">Introduzca los datos (Adulto)</strong>
                  <MDBIcon icon="angle-down" size="2x" className="white-text mr-3 cursorSenal" onClick={this.toggleCollapseAdulto("DatosAdulto")}/>
                </MDBRow>
                {/* Collapse Adultos */}
                <MDBCollapse id="DatosAdulto" isOpen={this.state.collapseIDAdulto} className="mt-1 white">
                  <MDBRow className="colorConviasa z-depth-1 mx-1 py-2">
                    <p className="ml-3 h5 white-text">Datos Adulto 1</p>
                  </MDBRow>
                  <MDBRow className="mt-3 mx-2">
                    <MDBCol md="3">
                    <MDBInputGroup
                      containerClassName="mt-4"
                      inputs={
                        <select className="browser-default custom-select" placeholder="Select">
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
                      containerClassName="mt-4"
                      inputs={
                        <select className="browser-default custom-select">
                          <option value="0">Nacionalidad</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Kuatro</option>
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
                      containerClassName="mt-4"
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
                      <MDBInput type="date" label="Fecha de Nacimiento"/>
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
                <MDBRow className="pb-1">
                </MDBRow>
                {/* fin Collapse Adulto */}
                <MDBRow className="colorConviasa caja py-3"  between>
                  <strong className="text-left h5 white-text ml-3">Introduzca los datos (Niño)</strong>
                  <MDBIcon icon="angle-down" size="2x" className="white-text mr-3 cursorSenal" onClick={this.toggleCollapseNino("DatosNino")}/>
                </MDBRow>
                {/* Collapse Nino */}
                <MDBCollapse id="DatosNino" isOpen={this.state.collapseIDNino} className="mt-1 white">
                  <MDBRow className="colorConviasa z-depth-1 mx-1">
                    <p className="ml-3 h5 white-text py-2">Datos niño</p>
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
                        containerClassName="mt-4"
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
                      <MDBInput type="date" label="Fecha de vencimiento de Pasaporte"/>
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput type="date" label="Fecha de Nacimiento"/>
                    </MDBCol>
                  </MDBRow>
                </MDBCollapse>
                <MDBRow className="pb-1">
                </MDBRow>
                {/* finCollapse Nino */}
                <MDBRow className="colorConviasa caja py-3" between>
                  <strong className="text-left h5 white-text ml-3">Introduzca los datos (Infante)</strong>
                  <MDBIcon icon="angle-down" size="2x" className="white-text mr-3 cursorSenal" onClick={this.toggleCollapseInfante("DatosInfante")}/>
                </MDBRow>
                {/* Collapse Infantes */}
                <MDBCollapse id="DatosInfante" isOpen={this.state.collapseIDInfante} className="mt-1 white">
                  <MDBRow className="colorConviasa z-depth-1 mx-1">
                    <p className="ml-3 h5 white-text py-2">Datos Infantes</p>
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
                        containerClassName="mt-4"
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
                      <MDBInput type="date" label="Fecha de vencimiento de Pasaporte"/>
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput type="date" label="Fecha de Nacimiento"/>
                    </MDBCol>
                  </MDBRow>
                </MDBCollapse>
                {/* fin Collapse Infantes */}
              </MDBCol>
            </MDBRow>
            {/* formulario Pago Debito */}
            <MDBRow className="mt-1">
              <MDBCol className="colorAccent">
                <MDBRow className="colorConviasa caja py-4">
                  <MDBCol>
                    <MDBRow >
                      <strong className="h5 white-text ml-3">Seleccione su metodo de pago</strong>    
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
                <SelectorPagos />
              </MDBCol>
            </MDBRow>
            {/* fin formulario Pago Debito */}
            <Link to="/Resumen">
              <MDBRow className="caja" center>
                <MDBBtn block color="grey" className="mb-1">Continuar</MDBBtn>
              </MDBRow>
            </Link>
          </MDBCol>
          
          <MDBCol sm="4" md="12" lg="4">
            <MDBRow>
              <MDBCol>
                <Link to="/">
                  <MDBBtn block color="orange">Salir</MDBBtn>
                </Link>
              </MDBCol>
              <MDBCol>
                <Link to="/">
                  <MDBBtn block color="orange">Regresar</MDBBtn>
                </Link>
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
            <MDBRow id="primary" between>
              <strong className="h5 left-text">Tasas y Recargos</strong>
              <MDBIcon icon="angle-down" size="2x" className="white-text rigth-text cursorSenal" onClick={this.toggleCollapseTasasyRecargos("TasasyRecargos")}/>
            </MDBRow>
            <MDBCollapse id="TasasyRecargos" isOpen={this.state.collapseTasasyRecargos} className="white">
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
              <MDBRow id="primary" className="pb-2">
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

const index = connect(mapStateToProps)(pasajeros)

export default index
