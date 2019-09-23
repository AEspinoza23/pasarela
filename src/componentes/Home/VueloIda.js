import React, { Component } from 'react'
import {MDBRow, MDBCol, MDBIcon, MDBCollapse} from 'mdbreact'
import {ShowAt, HideAt} from 'react-with-breakpoints'

//Axios para hacer los llamados a API's
import axios from 'axios';
//const API_URL = 'http://kiu.surnet.io:8080';

class VueloIda extends Component {

  constructor(props){
    super(props);
    this.state = {
      collapseEconomicaIda: false,
      collapseEconomica2Ida: false,
      collapseEjecutivaIda: false,
      collapsePClaseIda: false,
      //Segment content Ida
      vueloIdaSegment: [],
      vueloIdaSegSQuantity: [],
      vueloIdaSegArriLocation: [],
      vueloIdaSegArriTime: [],
      vueloIdaSegCabin: [],
      vueloIdaSegDepLocation: [],
      vueloIdaSegDepTime: [],
      vueloIdaSegDuration: [],
      vueloIdaSegEquipType: [],
      vueloIdaSegFlyghtNumber: [],
      vueloIdaSegmealtype: [],
      //default content Ida
      vueloIdaDefaultD: [],
      vueloIdaDefaultDes: [],
      vueloIdaDefaultO: []
    }
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
        destination: "CSS",
        date: "2019-11-15"
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
      headers: {'Content-Type':'application/json', 'Authorization':'R7c2CS4SYUGpyB31afs/TqcWX6Nuw9JrvsNwobyh5me/UoLdL6e0GxVNoqC3k2Zq'}
    }).then(response => response.data)
    .then((data,
          vueloIdaSegment,
          vueloIdaSegSQuantity,
          vueloIdaSegArriLocation,
          vueloIdaSegArriTime,
          vueloIdaSegCabin,
          vueloIdaSegDepLocation,
          vueloIdaSegDepTime,
          vueloIdaSegDuration,
          vueloIdaSegEquipType,
          vueloIdaSegFlyghtNumber,
          vueloIdaSegmealtype) => {
        this.setState({
          vuelo: data,
          isFetch: false,
          vueloIdaSegment: vueloIdaSegment,
          vueloIdaSegQuantity: vueloIdaSegSQuantity,
          vueloIdaSegArriLocation: vueloIdaSegArriLocation,
          vueloIdaSegArriTime: vueloIdaSegArriTime,
          vueloIdaSegCabin: vueloIdaSegCabin,
          vueloIdaSegDepLocation: vueloIdaSegDepLocation,
          vueloIdaSegDepTime: vueloIdaSegDepTime,
          vueloIdaSegDuration: vueloIdaSegDuration,
          vueloIdaSegEquipType: vueloIdaSegEquipType,
          vueloIdaSegFlyghtNumber: vueloIdaSegFlyghtNumber,
          vueloIdaSegment: vueloIdaSegmealtype,
        })
        console.log(this.state.vuelos);
    })
  }

  toggleCollapseEconomicaIda = collapseEconomicaIda => () => {
    this.setState(prevState => ({
      collapseEconomicaIda: prevState.collapseEconomicaIda !== collapseEconomicaIda ? collapseEconomicaIda : ""
    }));
  }

  toggleCollapseEconomica2Ida = collapseEconomica2Ida => () => {
    this.setState(prevState => ({
      collapseEconomica2Ida: prevState.collapseEconomica2Ida !== collapseEconomica2Ida ? collapseEconomica2Ida : ""
    }))
  }

  toggleCollapseEjecutivaIda = collapseEjecutivaIda => () => {
    this.setState(prevState => ({
      collapseEjecutivaIda: prevState.collapseEjecutivaIda !== collapseEjecutivaIda ? collapseEjecutivaIda : ""
    }))
  }

  toggleCollapsePClaseIda = collapsePClaseIda => () => {
    this.setState(prevState => ({
      collapsePClaseIda: prevState.collapsePClaseIda !== collapsePClaseIda ? collapsePClaseIda : "" 
    }))
  }


  render() {
    return (
      <div>
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
                <MDBRow className="radio radioVuelos">
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
                <MDBRow className="z-depth-2 colorConviasa py-3" between>
                  <MDBCol sm="5" className="radio radioTelefono">
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
                      <MDBIcon icon="angle-down" size="2x" className="white-text cursorSenal" onClick={this.toggleCollapseEconomicaIda("economicaIda")}/>
                    </MDBCol>
                  </ShowAt>
                </MDBRow>
                <MDBCollapse id="economicaIda" isOpen={this.state.collapseEconomicaIda}>
                  <MDBRow className="py-3 colorAccent" between >
                    <MDBCol>
                      <MDBRow center>
                        <p>Clase: W </p>
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
                      <input type="radio" name="cajasIda" value="W" id="economicaIdaSecundaria" />
                      <label htmlFor="economicaIdaSecundaria">
                        <MDBIcon icon="plane" size="lg" className="mr-1 white-text fa-flip-horizontal"/>
                        <strong className="h5 white-text">ECONÓMICA</strong>
                      </label>
                    </MDBRow>
                  </MDBCol>
                  <ShowAt breakpoint="mediumAndAbove">
                    <MDBCol sm="1">
                      <MDBIcon icon="angle-down" size="2x" className="white-text cursorSenal"  onClick={this.toggleCollapseEconomica2Ida("economica2Ida")}/>
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
                <MDBRow className="z-depth-2 colorConviasa py-3" between>
                  <MDBCol sm="5" className="radio radioTelefono">
                    <MDBRow>
                      <input type="radio" name="cajasIda" value="W" id="ejecutivaIda"/>
                      <label htmlFor="ejecutivaIda">
                        <MDBIcon icon="plane" size="lg" className="mr-1 white-text fa-flip-horizontal"/>
                        <strong className="h5 white-text">EJECUTIVA</strong>
                      </label>
                    </MDBRow>
                  </MDBCol>
                  <ShowAt breakpoint="mediumAndAbove">
                    <MDBCol sm="1">
                      <MDBIcon icon="angle-down" size="2x" className="white-text cursorSenal" onClick={this.toggleCollapseEjecutivaIda("ejecutivaIda")}/>
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
                <MDBRow className="z-depth-2 colorConviasa py-3" between>
                  <MDBCol sm="5" className="radio radioTelefono">
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
                      <MDBIcon icon="angle-down" size="2x" className="white-text cursorSenal" onClick={this.toggleCollapsePClaseIda("PClaseIda")}/>
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
      </div>
    )
  }
}

export default VueloIda