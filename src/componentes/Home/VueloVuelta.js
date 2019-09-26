import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBIcon, MDBCollapse } from 'mdbreact'
import { ShowAt } from 'react-with-breakpoints'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { datosVuelo: state.vuelo }
}

class vuelta extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Users",
      users: [],
      collapseEconomicaVuelta: false,
      collapseEconomica2Vuelta: false,
      collapseEjecutivaVuelta: false,
      collapsePClaseVuelta: false,
    };
  }

  toggleCollapseEconomicaVuelta = collapseEconomicaVuelta => () => {
    this.setState(prevState => ({
      collapseEconomicaVuelta: prevState.collapseEconomicaVuelta !== collapseEconomicaVuelta ? collapseEconomicaVuelta : ""
    }));
  }

  toggleCollapseEconomica2Vuelta = collapseEconomica2Vuelta => () => {
    this.setState(prevState => ({
      collapseEconomica2Vuelta: prevState.collapseEconomica2Vuelta !== collapseEconomica2Vuelta ? collapseEconomica2Vuelta : ""
    }));
  }

  toggleCollapseEjecutivaVuelta = collapseEjecutivaVuelta => () => {
    this.setState(prevState => ({
      collapseEjecutivaVuelta: prevState.collapseEjecutivaVuelta!== collapseEjecutivaVuelta ? collapseEjecutivaVuelta : ""
    }));
  }

  toggleCollapsePClaseVuelta = collapsePClaseVuelta => () => {
    this.setState(prevState => ({
      collapsePClaseVuelta: prevState.collapsePClaseVuelta !== collapsePClaseVuelta ? collapsePClaseVuelta : ""
    }));
  }

  render() {
    return (
      <div>
        <MDBRow id="accent" between>
          <ShowAt breakpoint="xlarge">
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
            <MDBCol md="6">
              <form className="formulario">
                <MDBRow className="radio radioVuelos">
                  <MDBCol id="cajasClases" className="mr-1 z-depth-2">
                    <MDBRow center>
                      <input type="radio" name="cajasVuelta" value="W" id="economicaVuelta" />
                      <label htmlFor="economicaVuelta">Clase: W </label>
                    </MDBRow>
                    <MDBRow center className="mt-3">
                      1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                    </MDBRow>
                  </MDBCol>
                  <MDBCol id="cajasClases" className="z-depth-2">
                    <MDBRow center>
                      <input type="radio" name="cajasVuelta" value="W" id="economicaVueltaSecundaria" />
                      <label htmlFor="economicaVueltaSecundaria">Clase: W </label>
                    </MDBRow>
                    <MDBRow center className="mt-3">
                      1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                    </MDBRow>
                  </MDBCol>
                  <MDBCol id="cajasClases" className="mx-1 z-depth-2">
                    <MDBRow center>
                      <input type="radio" name="cajasVuelta" value="W" id="ejecutivaVuelta" />
                      <label htmlFor="ejecutivaVuelta">Clase: W </label>
                    </MDBRow>
                    <MDBRow center className="mt-3">
                      1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                    </MDBRow>
                  </MDBCol>
                  <MDBCol id="cajasClases" className="z-depth-2">
                    <MDBRow center>
                      <input type="radio" name="cajasVuelta" value="W" id="primeraClaseVuelta" />
                      <label htmlFor="primeraClaseVuelta">Clase: W </label>
                    </MDBRow>
                    <MDBRow center className="mt-3">
                      1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                    </MDBRow>
                  </MDBCol>
                </MDBRow>  
              </form>
            </MDBCol>
          </ShowAt>
          <ShowAt breakpoint="largeAndBelow">
            <MDBCol>
              <form className="formulario">
                <MDBRow className="z-depth-2 colorConviasa py-3" between>
                  <MDBCol sm="5" className="radio radioTelefono">
                    <MDBRow>
                      <input type="radio" name="cajasVuelta" value="W" id="economicaVuelta" />
                      <label htmlFor="economicaVuelta">
                        <MDBIcon icon="plane" size="lg" className="mr-1 white-text fa-flip-horizontal"/>
                        <strong className="h5 white-text">ECONÓMICA</strong>
                      </label>
                    </MDBRow>
                  </MDBCol>
                  <ShowAt breakpoint="mediumAndAbove">
                    <MDBCol sm="1">
                      <MDBIcon icon="angle-down" size="2x" className="white-text cursorSenal" onClick={this.toggleCollapseEconomicaVuelta("economicaVuelta")}/>
                    </MDBCol>
                  </ShowAt>
                </MDBRow>
                <MDBCollapse id="economicaVuelta" isOpen={this.state.collapseEconomicaVuelta}>
                  <MDBRow className="py-3 white" between >
                    <MDBCol>
                      <MDBRow center>
                        <p>Clase: W</p>
                      </MDBRow>
                      <MDBRow center>
                        1 <MDBIcon className="mx-1" icon="briefcase"/> 1 <MDBIcon className="mx-1" icon="suitcase" />
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCollapse>
                <MDBRow className="z-depth-2 colorConviasa py-3" between>
                  <MDBCol sm="5" className="radio radioTelefono">
                    <MDBRow>
                      <input type="radio" name="cajasVuelta" value="W" id="economicaVueltaSecundaria" />
                      <label htmlFor="economicaVueltaSecundaria">
                        <MDBIcon icon="plane" size="lg" className="mr-1 white-text fa-flip-horizontal"/>
                        <strong className="h5 white-text">ECONÓMICA</strong>
                      </label>
                    </MDBRow>
                  </MDBCol>
                  <ShowAt breakpoint="mediumAndAbove">
                    <MDBCol sm="1">
                      <MDBIcon icon="angle-down" size="2x" className="white-text cursorSenal" onClick={this.toggleCollapseEconomica2Vuelta("economica2Vuelta")}/>
                    </MDBCol>
                  </ShowAt>
                </MDBRow>
                <MDBCollapse id="economica2Vuelta" isOpen={this.state.collapseEconomica2Vuelta} color="white">
                  <MDBRow  className="py-3 white" between>
                    <MDBCol>
                      <MDBRow center>
                        <p>Clase: W</p>
                      </MDBRow>
                      <MDBRow center>
                        1 <MDBIcon className="mx-1" icon="briefcase"/> 1<MDBIcon className="mx-1" icon="suitcase"/>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCollapse>
                <MDBRow className="z-depth-2 colorConviasa py-3"  between>
                  <MDBCol sm="5" className="radio radioTelefono">
                    <MDBRow>
                      <input type="radio" name="cajasVuelta" value="W" id="ejecutivaVuelta"  />
                      <label htmlFor="ejecutivaVuelta">
                        <MDBIcon icon="plane" size="lg" className="mr-1 white-text fa-flip-horizontal"/>
                        <strong className="h5 white-text">EJECUTIVA</strong>
                      </label>
                    </MDBRow>
                  </MDBCol>
                  <ShowAt breakpoint="mediumAndAbove">
                    <MDBCol sm="1">
                      <MDBIcon icon="angle-down" size="2x" className="white-text cursorSenal" onClick={this.toggleCollapseEjecutivaVuelta("ejecutivaVuelta")}/>
                    </MDBCol>
                  </ShowAt>
                </MDBRow>
                <MDBCollapse id="ejecutivaVuelta" isOpen={this.state.collapseEjecutivaVuelta} color="white">
                  <MDBRow className="py-3 white" between>
                    <MDBCol>
                      <MDBRow center>
                        <p>Clase: W</p>
                      </MDBRow>
                      <MDBRow center>
                        1 <MDBIcon className="mx-1" icon="briefcase"/> 1 <MDBIcon className="mx-1" icon="suitcase" />
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCollapse>
                <MDBRow className="z-depth-2 colorConviasa py-3" between>
                  <MDBCol sm="5" className="radio radioTelefono">
                    <MDBRow>
                      <input type="radio" name="cajasVuelta" value="W" id="primeraClaseVuelta" />
                      <label htmlFor="primeraClaseVuelta">
                        <MDBIcon icon="plane" size="lg" className="mr-1 white-text fa-flip-horizontal"/>
                        <strong className="text-left h5 white-text">PRIMERA CLASE</strong>
                      </label>
                    </MDBRow>
                  </MDBCol>
                  <ShowAt breakpoint="mediumAndAbove">
                    <MDBCol sm="1" md="1">
                      <MDBIcon icon="angle-down" size="2x" className="white-text cursorSenal" onClick={this.toggleCollapsePClaseVuelta("PClaseVuelta")}/>
                    </MDBCol>
                  </ShowAt>
                </MDBRow>
                <MDBCollapse id="PClaseVuelta" isOpen={this.state.collapsePClaseVuelta} color="white">
                  <MDBRow className="py-3 white" between>
                    <MDBCol>
                      <MDBRow center>
                        <p>Clase: W</p>
                      </MDBRow>
                      <MDBRow center>
                        1 <MDBIcon className="mx-1" icon="briefcase"/> 1<MDBIcon className="mx-1" icon="suitcase"/>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCollapse>
              </form>
            </MDBCol>
          </ShowAt>
        </MDBRow>
      </div>
    )
  }
}

const VueloVuelta = connect(mapStateToProps)(vuelta)

export default VueloVuelta