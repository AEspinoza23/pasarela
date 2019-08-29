import React, { Component } from 'react'
import { 
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import "../index.css";

export default class Contenedor extends Component {
  render() {
    return (
      <div>
        <MDBRow around className="mt-5">
          <MDBCol xs="12" lg="8">
            <MDBRow >
              <MDBCol>
                <MDBRow id="primary">
                  <strong>Seleccione otra fecha de ída</strong> <MDBIcon size="lg" className="ml-3" far icon="calendar-alt" />
                </MDBRow>
                <MDBRow id="secondary" between>
                  <MDBCol xs="12" sm="6">
                    <MDBRow>
                      <MDBCol sm="4">
                        <MDBRow>
                          <strong>Jueves</strong>
                        </MDBRow>
                        <MDBRow className="my-2">
                          <strong>30, Noviembre</strong>
                        </MDBRow>
                      </MDBCol>
                      <MDBCol sm="4">
                        <MDBRow>
                          <strong><MDBIcon icon="plane-departure" /> Caracas, Venezuela</strong>
                        </MDBRow>
                        <MDBRow className="my-3">
                          <strong><MDBIcon icon="plane-arrival" /> Porlamar, Venezuela</strong>
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol xs="12" sm="5">
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
                          <strong>Primera</strong>
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
                  <MDBCol xs="12" sm="6" md="4">
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
                <MDBRow id="secondary" between>
                  <MDBCol xs="12" sm="6">
                    <MDBRow>
                      <MDBCol sm="6" md="4">
                        <MDBRow>
                        <strong>Viernes</strong>
                        </MDBRow>
                        <MDBRow className="my-2">
                          <strong>30, Diciembre</strong>
                        </MDBRow>
                      </MDBCol>
                      <MDBCol sm="6" md="8">
                        <MDBRow>
                          <strong> <MDBIcon icon="plane-departure" /> Caracas, Venezuela</strong>
                        </MDBRow>
                        <MDBRow className="my-3">
                          <strong><MDBIcon icon="plane-arrival" /> Porlamar, Venezuela</strong>
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol xs="12" sm="5">
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
                          <strong>Primera</strong>
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
                <MDBRow id="accent" between>
                  <MDBCol xs="12" sm="6" md="4">
                    <MDBRow around>
                      <MDBCol >
                        <MDBRow start>
                          <MDBCol size="6">
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
                        <MDBRow center className="my-3">
                          1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                        </MDBRow>
                      </MDBCol>
                      <MDBCol id="cajasClases" className="border-left border-white">
                        <input type="radio" /> Clase: <br />
                        <MDBRow center>
                            Ejecutiva
                        </MDBRow>
                        <MDBRow center className="my-3">
                          1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                        </MDBRow>
                      </MDBCol>
                      <MDBCol id="cajasClases" className="border-left border-white">
                        <input type="radio" /> Clase: <br />
                        <MDBRow center>
                          Primera Clase
                        </MDBRow>
                        <MDBRow center className="my-3">
                          1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol sm="12" md="12" lg="4">
            <MDBRow center>
              <MDBBtn block color="orange">Salir</MDBBtn>
            </MDBRow>
            <MDBRow className="mt-1" id="primary">
              Su selección
            </MDBRow>
            <MDBRow id="secondary">
              <MDBCol>
                <MDBRow>
                  <MDBBtn block color="orange">Reservar</MDBBtn>
                </MDBRow>
                <MDBRow>
                </MDBRow>
                <MDBRow>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}
