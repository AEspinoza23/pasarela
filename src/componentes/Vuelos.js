import React, { Component } from 'react'
import { 
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCollapse,
} from "mdbreact";
import "../index.css";
import { HideAt } from 'react-with-breakpoints';

export default class Contenedor extends Component {

  state = {
    collapseID: false
  }
  
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  }

  render() {
    return (
      <div className="marginTop">
        <MDBRow around>
          <MDBCol xs="12" lg="8">
            <MDBRow className="h6">
              <MDBCol>
                <MDBRow id="primary">
                  <strong>Seleccione otra fecha de ída</strong> <MDBIcon size="lg" className="ml-3" far icon="calendar-alt" />
                </MDBRow>
                <MDBRow id="secondary" between>
                  <MDBCol>
                    <MDBRow>
                      <MDBCol size="4">
                        <MDBRow>
                          <strong>Jueves</strong>
                        </MDBRow>
                        <MDBRow className="my-2 h3">
                          <strong>30</strong>
                        </MDBRow>
                        <MDBRow>
                          <strong>Noviembre</strong>
                        </MDBRow>
                      </MDBCol>
                      <MDBCol>
                        <MDBRow>
                          <strong><MDBIcon icon="plane-departure" /> Caracas, Venezuela</strong>
                        </MDBRow>
                        <MDBRow className="my-3">
                          <strong><MDBIcon icon="plane-arrival" /> Porlamar, Venezuela</strong>
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol  sm="12" md="5" className="pt-3">
                    <MDBRow>
                      <MDBCol className="border-left border-white">
                        <MDBRow center>
                          <strong className="h6">Económica</strong>
                        </MDBRow>
                        <MDBRow center className="mt-4">
                          1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                        </MDBRow>
                      </MDBCol>
                      <MDBCol className="border-left border-white">
                        <MDBRow center>
                          <strong className="h6">Ejecutiva</strong>
                        </MDBRow>
                        <MDBRow center className="mt-4">
                          1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                        </MDBRow>
                      </MDBCol>
                      <MDBCol className="border-left border-white">
                        <MDBRow center>
                          <strong className="h6">Primera</strong>
                        </MDBRow>
                        <MDBRow center>
                          <strong>Clase</strong>
                        </MDBRow>
                        <MDBRow center className="mt-1">
                          1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
                <MDBRow id="accent" between>
                  <MDBCol className="h6" sm="12" md="4">
                    <MDBRow around>
                      <MDBCol>
                        <MDBRow>
                          <MDBCol>
                            <MDBRow>
                              <strong>Ciudad</strong>
                            </MDBRow>
                            <MDBRow>
                              <strong>12:30</strong>
                            </MDBRow>
                          </MDBCol>
                          <MDBCol>
                            <MDBRow>
                              <strong>Ciudad</strong>
                            </MDBRow>
                            <MDBRow>
                              <strong>12:30</strong>
                            </MDBRow>
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                      <MDBCol>
                        <MDBRow>
                          <strong>Vuelo:</strong>
                        </MDBRow>
                        <MDBRow>
                          <strong>Duración:</strong>
                        </MDBRow>
                        <MDBRow>
                          <strong>Operado:</strong>
                        </MDBRow>
                        <MDBRow>
                          <strong>Equipo:</strong>
                        </MDBRow>
                        <MDBRow>
                          <strong>Comida:</strong>
                        </MDBRow>
                        <MDBRow>
                          <strong>Num. vuelo:</strong>
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol md="5">
                    <MDBRow>
                      <MDBCol id="cajasClases" className="border-left border-white">
                        <input type="radio" /> Clase: <br />
                        <MDBRow center>
                          Económica
                        </MDBRow>
                        <MDBRow center className="mt-3">
                          1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                        </MDBRow>
                      </MDBCol>
                      <MDBCol id="cajasClases" className="border-left border-white">
                        <input type="radio" /> Clase: <br />
                        <MDBRow center>
                            Ejecutiva
                        </MDBRow>
                        <MDBRow center className="mt-3">
                          1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                        </MDBRow>
                      </MDBCol>
                      <MDBCol id="cajasClases" className="border-right border-white">
                        <input type="radio" /> Clase: <br />
                        <MDBRow center>
                          Primera Clase
                        </MDBRow>
                        <MDBRow center className="mt-3">
                          1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="mt-4">
                <MDBRow id="primary">
                  <strong>Seleccione otra fecha de ída</strong> <MDBIcon size="lg" className="ml-3" far icon="calendar-alt" />
                </MDBRow>
                <MDBRow className="h6"  id="secondary" between>
                  <MDBCol>
                    <MDBRow>
                      <MDBCol size="4">
                        <MDBRow>
                        <strong>Viernes</strong>
                        </MDBRow>
                        <MDBRow className="my-2 h3">
                          <strong>30</strong>
                        </MDBRow>
                        <MDBRow>
                          <strong>Diciembre</strong>
                        </MDBRow>
                      </MDBCol>
                      <MDBCol>
                        <MDBRow>
                          <strong> <MDBIcon icon="plane-departure" /> Caracas, Venezuela</strong>
                        </MDBRow>
                        <MDBRow className="my-3">
                          <strong><MDBIcon icon="plane-arrival" /> Porlamar, Venezuela</strong>
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol sm="12" md="5" className="pt-3">
                    <MDBRow>
                      <MDBCol className="border-left border-white">
                        <MDBRow center>
                          <strong>Económica</strong>
                        </MDBRow>
                        <MDBRow center className="mt-4">
                          1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                        </MDBRow>
                      </MDBCol>
                      <MDBCol className="border-left border-white">
                        <MDBRow center>
                          <strong>Ejecutiva</strong>
                        </MDBRow>
                        <MDBRow center className="mt-4">
                          1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                        </MDBRow>
                      </MDBCol>
                      <MDBCol className="border-left border-white">
                        <MDBRow center>
                          <strong >Primera</strong>
                        </MDBRow>
                        <MDBRow center>
                          <strong>Clase</strong>
                        </MDBRow>
                        <MDBRow center className="my-2">
                          1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="h6" id="accent" between>
                  <MDBCol xs="12" sm="6" md="4">
                    <MDBRow around>
                      <MDBCol>
                        <MDBRow start>
                          <MDBCol  size="6">
                            <MDBRow>
                              <strong>Ciudad</strong>
                            </MDBRow>
                            <MDBRow>
                              <strong>12:30</strong>
                            </MDBRow>
                          </MDBCol>
                          <MDBCol size="6">
                            <MDBRow>
                              <strong>Ciudad</strong>
                            </MDBRow>
                            <MDBRow>
                              <strong>12:30</strong>
                            </MDBRow>
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                      <MDBCol>
                        <MDBRow>
                          <strong>Vuelo:</strong>
                        </MDBRow>
                        <MDBRow>
                          <strong>Duración:</strong>
                        </MDBRow>
                        <MDBRow>
                          <strong>Operado:</strong>
                        </MDBRow>
                        <MDBRow>
                          <strong>Equipo:</strong>
                        </MDBRow>
                        <MDBRow>
                          <strong>Comida:</strong>
                        </MDBRow>
                        <MDBRow>
                          <strong>Num. vuelo:</strong>
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol md="5">
                    <MDBRow>
                      <MDBCol id="cajasClases" className="border-left border-white">
                        <input type="radio" /> Clase: <br />
                        <MDBRow center>
                          Económica
                        </MDBRow>
                        <MDBRow center className="mt-3">
                          1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                        </MDBRow>
                      </MDBCol>
                      <MDBCol id="cajasClases" className="border-left border-white">
                        <input type="radio" /> Clase: <br />
                        <MDBRow center>
                            Ejecutiva
                        </MDBRow>
                        <MDBRow center className="mt-3">
                          1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                        </MDBRow>
                      </MDBCol>
                      <MDBCol id="cajasClases" className="border-left border-white">
                        <input type="radio" /> Clase: <br />
                        <MDBRow center>
                          Primera Clase
                        </MDBRow>
                        <MDBRow center className="mt-3">
                          1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol className="h6" sm="12" md="12" lg="4">
            <HideAt breakpoint="mediumAndBelow">
              <MDBRow center>
                <MDBBtn size="lg" block color="orange">Salir</MDBBtn>
              </MDBRow>
            </HideAt>
            <MDBRow className="mt-1" id="primary">
              Su selección
            </MDBRow>
            <MDBRow  id="secondary">
              <MDBCol>
                <MDBRow center>
                  <MDBBtn block color="orange">Reservar</MDBBtn>
                </MDBRow>
                <MDBRow className="mt-3">
                  <MDBCol>
                    <MDBRow className="colorConviasa py-3" onClick={this.toggleCollapse("DatosAdulto")} between>
                      <MDBCol md="11">
                        <strong className="ml-4 text-left h5 white-text">IDA</strong>
                      </MDBCol>
                      <MDBCol md="1">
                        <MDBIcon icon="angle-down" size="2x" className="white-text"/>
                      </MDBCol>
                    </MDBRow>
                    <MDBCollapse id="DatosAdulto" isOpen={this.state.collapseID} color="white">
                      <MDBRow id="accent" between>
                      </MDBRow>
                    </MDBCollapse>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <MDBRow className="colorConviasa py-3" onClick={this.toggleCollapse("DatosAdulto")} between>
                      <MDBCol md="11">
                        <strong className="ml-4 text-left h5 white-text">VUELTA</strong>
                      </MDBCol>
                      <MDBCol md="1">
                        <MDBIcon icon="angle-down" size="2x" className="white-text"/>
                      </MDBCol>
                    </MDBRow>
                    <MDBCollapse id="DatosAdulto" isOpen={this.state.collapseID} color="white">
                      <MDBRow id="accent" between>
                      </MDBRow>
                    </MDBCollapse>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <MDBRow className="colorConviasa py-3" onClick={this.toggleCollapse("DatosAdulto")} between>
                      <MDBCol md="2">
                        <strong className="text-left h5 white-text">Detalles</strong>
                      </MDBCol>
                      <MDBCol md="1">
                        <MDBIcon icon="angle-down" size="2x" className="white-text"/>
                      </MDBCol>
                    </MDBRow>
                    <MDBCollapse id="DatosAdulto" isOpen={this.state.collapseID} color="white">
                      <MDBRow id="accent" between>
                      </MDBRow>
                    </MDBCollapse>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}
