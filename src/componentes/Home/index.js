import React, { Component } from 'react'
import { 
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCollapse,
} from "mdbreact";
import "../../index.css";
import { HideAt, ShowAt } from 'react-with-breakpoints';
import { Link } from 'react-router-dom'
import Datepicker from './Datepicker'

// Axios para hacer los llamados a API's
import axios from 'axios'
//const API_URL = 'http://kiu.surnet.io:8080';  

class index extends Component {

  state = {
    collapseIda: false,
    collapseVuelta: false,
    collapseDetalles: false,
    collapseEconomicaIda: false,
    collapseEconomica2Ida: false,
    collapseEjecutivaIda: false,
    collapsePClaseIda: false,
    collapseEconomicaVuelta: false,
    collapseEconomica2Vuelta: false,
    collapseEjecutivaVuelta: false,
    collapsePClaseVuelta: false,
    vuelos: []
  }

  componentDidMount() {

    const url = `/Airavailrs`;

    let datosVuelos = {
      direct_flight: false,
      go_info: {
        origin: "CCS", 
        destination: "PMV", 
        date: "2019-11-11"
      },
      back_info: {
        origin: "PMV", 
        destination: "CCS", 
        date: "2019-11-12"
      },
      max_stops: 0,
      passangers_info: {
        adt: 1,
        cnn: 0, 
        inf: 0
      }
    }

    axios({
      method: 'post',
      url: url,
      data: datosVuelos,
      headers: {'Content-Type':'application/json', 'Authorization':'R7c2CS4SYUGpyB31afs/TqcWX6Nuw9JrvsNwobyh5me/UoLdL6e0GxVNoqC3k2Zq'},
    }).then(response => response.data)
    .then((data) => {
      this.setState({vuelos: data})
      console.log(this.state.vuelos)
    })

  }
  
  toggleCollapseIda = collapseIda => () => {
    this.setState(prevState => ({
      collapseIda: prevState.collapseIda !== collapseIda ? collapseIda : ""
    }));
  }

  toggleCollapseVuelta = collapseVuelta => () => {
    this.setState(prevState => ({
      collapseVuelta: prevState.collapseVuelta !== collapseVuelta ? collapseVuelta : ""
    }));
  }
  
  toggleCollapseDetalles= collapseDetalles => () => {
    this.setState(prevState => ({
      collapseDetalles: prevState.collapseDetalles !== collapseDetalles ? collapseDetalles : ""
    }));
  }

  toggleCollapseEconomicaIda = collapseEconomicaIda => () => {
    this.setState(prevState => ({
      collapseEconomicaIda: prevState.collapseEconomicaIda !== collapseEconomicaIda ? collapseEconomicaIda : ""
    }));
  }

  toggleCollapseEconomica2Ida = collapseEconomica2Ida => () => {
    this.setState(prevState => ({
      collapseEconomica2Ida: prevState.collapseEconomica2Ida !== collapseEconomica2Ida ? collapseEconomica2Ida : ""
    }));
  }

  toggleCollapseEjecutivaIda = collapseEjecutivaIda => () => {
    this.setState(prevState => ({
      collapseEjecutivaIda: prevState.collapseEjecutivaIda !== collapseEjecutivaIda ? collapseEjecutivaIda : ""
    }));
  }

  toggleCollapsePClaseIda = collapsePClaseIda => () => {
    this.setState(prevState => ({
      collapsePClaseIda: prevState.collapsePClaseIda !== collapsePClaseIda ? collapsePClaseIda : ""
    }));
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
      <div className="marginTop">
        <ShowAt breakpoint="mediumAndBelow">
          <MDBRow center>
            <MDBBtn className="mb-1 caja" size="lg" block color="orange">Salir</MDBBtn>
          </MDBRow>
        </ShowAt>
        <MDBRow around>
          <MDBCol sm="12" lg="8">
            <MDBRow className="h6">
              <MDBCol>
                <MDBRow id="primary">
                  <strong>Seleccione otra fecha de ída</strong><Datepicker />
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
                        <HideAt breakpoint="largeAndBelow">
                          <MDBRow>
                            <strong><MDBIcon icon="plane-departure" /> Caracas, Venezuela</strong>
                          </MDBRow>
                          <MDBRow className="my-3">
                            <strong><MDBIcon icon="plane-arrival" /> Porlamar, Venezuela</strong>
                          </MDBRow>
                        </HideAt>
                      </MDBCol>
                      <ShowAt breakpoint="largeAndBelow">
                        <MDBCol className="pt-3 border-left border-white">
                          <strong>
                            <MDBIcon size="lg" icon="plane-departure" /><br/>
                            <div className="my-1">13:30<br/></div>
                            CSS
                          </strong>
                        </MDBCol>
                        <MDBCol className="pt-3">
                          <strong>
                            <MDBIcon size="lg" icon="plane-arrival" /><br/>
                            <div className="my-1">13:30<br/></div>
                            PMV
                          </strong>
                        </MDBCol>
                      </ShowAt>
                    </MDBRow>
                  </MDBCol>
                  <ShowAt breakpoint="xlarge">
                    <MDBCol  sm="12" md="6" className="pt-3">
                      <MDBRow>
                        <MDBCol md="6" className="border-left border-white">
                          <MDBRow center>
                            <strong className="h6">Económica</strong>
                          </MDBRow>
                          <MDBRow center className="mt-4">
                            1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                          </MDBRow>
                        </MDBCol>
                        <MDBCol md="3" className="border-left border-white">
                          <MDBRow center>
                            <strong className="h6">Ejecutiva</strong>
                          </MDBRow>
                          <MDBRow center className="mt-4">
                            1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                          </MDBRow>
                        </MDBCol>
                        <MDBCol md="3" className="border-left border-white">
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
                  </ShowAt>
                </MDBRow>
                <MDBRow id="accent" between>
                  <HideAt breakpoint="largeAndBelow">
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
                        <MDBRow className="radio">
                          <MDBCol id="cajasClases" className="mr-1 z-depth-2">
                            <MDBRow center>
                              <input type="radio" name="cajasIda" value="W" id="economicaIda" />
                              <label htmlFor="economicaIda">Clase: W </label>
                            </MDBRow>
                            <MDBRow center className="mt-3">
                              1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                            </MDBRow>
                          </MDBCol>
                          <MDBCol id="cajasClases" className="z-depth-2">
                            <MDBRow center>
                              <input type="radio" name="cajasIda" value="W" id="economicaIdaSecundaria" />
                              <label htmlFor="economicaIdaSecundaria">Clase: W </label>
                            </MDBRow>
                            <MDBRow center className="mt-3">
                              1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                            </MDBRow>
                          </MDBCol>
                          <MDBCol id="cajasClases" className="mx-1 z-depth-2">
                            <MDBRow center>
                              <input type="radio" name="cajasIda" value="W" id="ejecutivaIda" />
                              <label htmlFor="ejecutivaIda">Clase: W </label>
                            </MDBRow>
                            <MDBRow center className="mt-3">
                              1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                            </MDBRow>
                          </MDBCol>
                          <MDBCol id="cajasClases" className="z-depth-2">
                            <MDBRow center>
                              <input type="radio" name="cajasIda" value="W" id="primeraClaseIda" />
                              <label htmlFor="primeraClaseIda">Clase: W </label>
                            </MDBRow>
                            <MDBRow center className="mt-3">
                              1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                            </MDBRow>
                          </MDBCol>
                        </MDBRow>  
                      </form>
                    </MDBCol>
                  </HideAt>
                  <ShowAt breakpoint="largeAndBelow">
                    <MDBCol>
                      <form className="formulario">
                        <MDBRow className="z-depth-2 colorConviasa py-3" onClick={this.toggleCollapseEconomicaIda("economicaIda")} between>
                          <MDBCol sm="5" className="radioTelefono">
                            <MDBRow>
                              <input type="radio" name="cajasIda" value="W" id="economicaIda" />
                              <label htmlFor="economicaIda">
                                <MDBIcon icon="plane" size="lg" className="mr-1 white-text fa-flip-horizontal"/>
                                <strong className="h5 white-text">ECONÓMICA</strong>
                              </label>
                            </MDBRow>
                          </MDBCol>
                          <ShowAt breakpoint="mediumAndAbove">
                            <MDBCol sm="1">
                              <MDBIcon icon="angle-down" size="2x" className="white-text"/>
                            </MDBCol>
                          </ShowAt>
                        </MDBRow>
                        <MDBCollapse id="economicaIda" isOpen={this.state.collapseEconomicaIda}>
                          <MDBRow className="py-3 colorAccent" between >
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
                        <MDBRow className="z-depth-2 colorConviasa py-3" onClick={this.toggleCollapseEconomica2Ida("economica2Ida")} between>
                          <MDBCol sm="5" className="radioTelefono">
                            <MDBRow>
                              <input type="radio" name="cajasIda" value="W" id="economicaIdaSecundaria" />
                              <label htmlFor="economicaIdaSecundaria">
                                <MDBIcon icon="plane" size="lg" className="mr-1 white-text fa-flip-horizontal"/>
                                <strong className="h5 white-text">ECONÓMICA</strong>
                              </label>
                            </MDBRow>
                          </MDBCol>
                          <ShowAt breakpoint="mediumAndAbove">
                            <MDBCol sm="1">
                              <MDBIcon icon="angle-down" size="2x" className="white-text"/>
                            </MDBCol>
                          </ShowAt>
                        </MDBRow>
                        <MDBCollapse id="economica2Ida" isOpen={this.state.collapseEconomica2Ida} color="white">
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
                        <MDBRow className="z-depth-2 colorConviasa py-3" onClick={this.toggleCollapseEjecutivaIda("ejecutivaIda")} between>
                          <MDBCol sm="5" className="radioTelefono">
                            <MDBRow>
                              <input type="radio" name="cajasIda" value="W" id="ejecutivaIda" />
                              <label htmlFor="ejecutivaIda">
                                <MDBIcon icon="plane" size="lg" className="mr-1 white-text fa-flip-horizontal"/>
                                <strong className="h5 white-text">EJECUTIVA</strong>
                              </label>
                            </MDBRow>
                          </MDBCol>
                          <ShowAt breakpoint="mediumAndAbove">
                            <MDBCol sm="1">
                              <MDBIcon icon="angle-down" size="2x" className="white-text"/>
                            </MDBCol>
                          </ShowAt>
                        </MDBRow>
                        <MDBCollapse id="ejecutivaIda" isOpen={this.state.collapseEjecutivaIda} color="white">
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
                        <MDBRow className="z-depth-2 colorConviasa py-3" onClick={this.toggleCollapsePClaseIda("PClaseIda")} between>
                          <MDBCol sm="5" className="radioTelefono">
                            <MDBRow>
                              <input type="radio" name="cajasIda" value="W" id="primeraClaseIda" />
                              <label htmlFor="primeraClaseIda">
                                <MDBIcon icon="plane" size="lg" className="mr-1 white-text fa-flip-horizontal"/>
                                <strong className="text-left h5 white-text">PRIMERA CLASE</strong>
                              </label>
                            </MDBRow>
                          </MDBCol>
                          <ShowAt breakpoint="mediumAndAbove">
                            <MDBCol sm="1" md="1">
                              <MDBIcon icon="angle-down" size="2x" className="white-text"/>
                            </MDBCol>
                          </ShowAt>
                        </MDBRow>
                        <MDBCollapse id="PClaseIda" isOpen={this.state.collapsePClaseIda} color="white">
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
              </MDBCol>
            </MDBRow>
            <MDBRow className="h6">
              <MDBCol>
                <MDBRow id="primary">
                  <strong>Seleccione otra fecha de vuelta</strong><Datepicker/>
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
                        <HideAt breakpoint="largeAndBelow">
                          <MDBRow>
                            <strong><MDBIcon icon="plane-departure" /> Caracas, Venezuela</strong>
                          </MDBRow>
                          <MDBRow className="my-3">
                            <strong><MDBIcon icon="plane-arrival" /> Porlamar, Venezuela</strong>
                          </MDBRow>
                        </HideAt>
                      </MDBCol>
                      <ShowAt breakpoint="largeAndBelow">
                        <MDBCol className="pt-3 border-left border-white">
                          <strong>
                            <MDBIcon size="lg" icon="plane-departure" /><br/>
                            <div className="my-1">13:30<br/></div>
                            CSS
                          </strong>
                        </MDBCol>
                        <MDBCol className="pt-3">
                          <strong>
                            <MDBIcon size="lg" icon="plane-arrival" /><br/>
                            <div className="my-1">13:30<br/></div>
                            PMV
                          </strong>
                        </MDBCol>
                      </ShowAt>
                    </MDBRow>
                  </MDBCol>
                  <ShowAt breakpoint="xlarge">
                    <MDBCol  sm="12" md="6" className="pt-3">
                      <MDBRow end>
                        <MDBCol md="6" className="border-left border-white">
                          <MDBRow center>
                            <strong className="h6">Económica</strong>
                          </MDBRow>
                          <MDBRow center className="mt-4">
                            1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                          </MDBRow>
                        </MDBCol>
                        <MDBCol md="3" className="border-left border-white">
                          <MDBRow center>
                            <strong className="h6">Ejecutiva</strong>
                          </MDBRow>
                          <MDBRow center className="mt-4">
                            1 <MDBIcon className="mx-1" icon="briefcase" /> 1 <MDBIcon className="mx-1" icon="suitcase" />
                          </MDBRow>
                        </MDBCol>
                        <MDBCol md="3" className="border-left border-white">
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
                  </ShowAt>
                </MDBRow>
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
                        <MDBRow className="radio">
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
                        <MDBRow className="z-depth-2 colorConviasa py-3" onClick={this.toggleCollapseEconomicaVuelta("economicaVuelta")} between>
                          <MDBCol sm="5" className="radioTelefono">
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
                              <MDBIcon icon="angle-down" size="2x" className="white-text"/>
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
                        <MDBRow className="z-depth-2 colorConviasa py-3" onClick={this.toggleCollapseEconomica2Vuelta("economica2Vuelta")} between>
                          <MDBCol sm="5" className="radioTelefono">
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
                              <MDBIcon icon="angle-down" size="2x" className="white-text"/>
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
                        <MDBRow className="z-depth-2 colorConviasa py-3" onClick={this.toggleCollapseEjecutivaVuelta("ejecutivaVuelta")} between>
                          <MDBCol sm="5" className="radioTelefono">
                            <MDBRow>
                              <input type="radio" name="cajasVuelta" value="W" id="ejecutivaVuelta" />
                              <label htmlFor="ejecutivaVuelta">
                                <MDBIcon icon="plane" size="lg" className="mr-1 white-text fa-flip-horizontal"/>
                                <strong className="h5 white-text">EJECUTIVA</strong>
                              </label>
                            </MDBRow>
                          </MDBCol>
                          <ShowAt breakpoint="mediumAndAbove">
                            <MDBCol sm="1">
                              <MDBIcon icon="angle-down" size="2x" className="white-text"/>
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
                        <MDBRow className="z-depth-2 colorConviasa py-3" onClick={this.toggleCollapsePClaseVuelta("PClaseVuelta")} between>
                          <MDBCol sm="5" className="radioTelefono">
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
                              <MDBIcon icon="angle-down" size="2x" className="white-text"/>
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
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol className="h6" sm="12" md="12" lg="4">
            <HideAt breakpoint="mediumAndBelow">
              <MDBRow center className="caja colorConviasa">
                <MDBBtn flat className="white-text" size="lg" block>Salir</MDBBtn>
              </MDBRow>
            </HideAt>
            <MDBRow className="mt-1" id="primary">
              Su selección
            </MDBRow>
            <MDBRow  id="secondary">
              <MDBCol>
                <Link to="/Pasajeros">
                  <MDBRow center>
                    <MDBBtn className="z-depth-2" block color="orange">Reservar</MDBBtn>
                  </MDBRow>
                </Link>
                <MDBRow className="mt-3">
                  <MDBCol>
                    <MDBRow className="z-depth-2 colorConviasa py-3" onClick={this.toggleCollapseIda("ida")} between>
                      <MDBIcon icon="plane" size="2x" className="ml-3"/>
                      <strong className="ml-4 text-left h5 white-text" >IDA</strong>
                      <MDBIcon icon="angle-down" size="2x" className="white-text pr-4"/>
                    </MDBRow>
                    <MDBCollapse id="ida" isOpen={this.state.collapseIda} color="white">
                      <MDBRow id="expansion" className="z-depth-2">
                        <MDBCol>
                          <MDBRow>Jueves 12 Septiembre</MDBRow>
                          <MDBRow className="h3">CCS-PMV</MDBRow>
                          <MDBRow className="h6">: - :</MDBRow>
                          <MDBRow>Escala</MDBRow>
                        </MDBCol>
                      </MDBRow>
                    </MDBCollapse>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <MDBRow className="z-depth-2 colorConviasa py-3" onClick={this.toggleCollapseVuelta("vuelta")} between>
                      <MDBIcon icon="plane" size="2x" className="ml-3"/>
                      <strong className="ml-4 text-left h5 white-text">VUELTA</strong>
                      <MDBIcon icon="angle-down" size="2x" className="white-text pr-4"/>
                    </MDBRow>
                    <MDBCollapse id="vuelta" isOpen={this.state.collapseVuelta} color="white">
                      <MDBRow id="expansion" className="z-depth-2">
                        <MDBCol>
                          <MDBRow>Jueves 19 Septiembre</MDBRow>
                          <MDBRow className="h3">PMV-CCS</MDBRow>
                          <MDBRow className="h6">: - :</MDBRow>
                          <MDBRow>Escala</MDBRow>
                        </MDBCol>
                      </MDBRow>
                    </MDBCollapse>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <MDBRow className="z-depth-2 colorConviasa py-3" onClick={this.toggleCollapseDetalles("detalles")} between>
                      <strong className="ml-4 text-left h5 white-text">Detalles</strong>
                      <MDBIcon icon="angle-down" size="2x" className="white-text pr-4"/>
                    </MDBRow>
                    <MDBCollapse id="detalles" isOpen={this.state.collapseDetalles} color="white">
                      <MDBRow id="expansion" className="z-depth-2" >
                        <MDBCol>
                          <MDBRow className="h6">Adulto(s):</MDBRow>
                          <MDBRow className="h6">Niño(s):</MDBRow>
                          <MDBRow className="h6">Infante(s):</MDBRow>
                          <MDBRow className="h4">Monto Base: 2404</MDBRow>
                          <MDBRow className="h5">Recargos:</MDBRow>
                        </MDBCol>
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


export default index