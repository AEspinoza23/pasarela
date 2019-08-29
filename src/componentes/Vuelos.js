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
          <MDBCol sm="8">
            <MDBRow >
              <MDBCol>
                <MDBRow id="primary">
                  <strong>Seleccione otra fecha de ída</strong> <MDBIcon size="lg" className="ml-3" far icon="calendar-alt" />
                </MDBRow>
                <MDBRow id="secondary" between>
                  <MDBCol xs="12" sm="5">
                    <MDBRow>
                      <MDBCol>
                        <MDBRow>
                        <strong>DíaNombre</strong>
                        </MDBRow>
                        <MDBRow className="my-2">
                          <strong>DíaNumero, Mes</strong>
                        </MDBRow>
                      </MDBCol>
                      <MDBCol>
                        <MDBRow>
                          <MDBIcon icon="plane-departure" /> <strong>Ciudad, País</strong>
                        </MDBRow>
                        <MDBRow className="my-3">
                          <MDBIcon icon="plane-arrival" /> <strong>Ciudad, País</strong>
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
                        <MDBRow center className="my-3">
                          1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                        </MDBRow>
                      </MDBCol>
                      <MDBCol className="border-left border-white">
                        <MDBRow center>
                          <strong>Ejecutiva</strong>
                        </MDBRow>
                        <MDBRow center className="my-3">
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
                        <MDBRow center className="my-3">
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
                          <MDBCol size="5">
                            <MDBRow>
                              <strong>Ciudad</strong>
                            </MDBRow>
                            <MDBRow>
                              <strong>12:30</strong>
                            </MDBRow>
                          </MDBCol>
                          <MDBCol size="5">
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
                          <strong>Número de vuelo:</strong>
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
            <MDBRow>
              <MDBCol className="mt-4">
                <MDBRow id="primary">
                  <strong>Seleccione otra fecha de ída</strong> <MDBIcon size="lg" className="ml-3" far icon="calendar-alt" />
                </MDBRow>
                <MDBRow id="secondary" between>
                  <MDBCol xs="12" sm="5">
                    <MDBRow>
                      <MDBCol>
                        <MDBRow>
                        <strong>DíaNombre</strong>
                        </MDBRow>
                        <MDBRow className="my-2">
                          <strong>DíaNumero, Mes</strong>
                        </MDBRow>
                      </MDBCol>
                      <MDBCol>
                        <MDBRow>
                          <MDBIcon icon="plane-departure" /> <strong>Ciudad, País</strong>
                        </MDBRow>
                        <MDBRow className="my-3">
                          <MDBIcon icon="plane-arrival" /> <strong>Ciudad, País</strong>
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
                        <MDBRow center className="my-3">
                          1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                        </MDBRow>
                      </MDBCol>
                      <MDBCol className="border-left border-white">
                        <MDBRow center>
                          <strong>Ejecutiva</strong>
                        </MDBRow>
                        <MDBRow center className="my-3">
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
                        <MDBRow center className="my-3">
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
                          <MDBCol size="5">
                            <MDBRow>
                              <strong>Ciudad</strong>
                            </MDBRow>
                            <MDBRow>
                              <strong>12:30</strong>
                            </MDBRow>
                          </MDBCol>
                          <MDBCol size="5">
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
                          <strong>Número de vuelo:</strong>
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
          <MDBCol sm="4">
            <MDBRow center>
              <MDBBtn block color="orange">Salir</MDBBtn>
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
