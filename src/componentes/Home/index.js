import React, { Component } from 'react'
import { 
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCollapse,
  MDBModal, 
  MDBView,
  MDBTooltip,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import "../../index.css";
import { HideAt, ShowAt } from 'react-with-breakpoints';
import { Redirect } from 'react-router-dom'
import Calendar from 'react-calendar'
import VueloVuelta from '../Home/VueloVuelta'
import VueloIda from '../Home/VueloIda'
import { determineMeals, determineEquip, determineCity, determineMaletas, determineClasses, sleep  } from '../../helpers';

// Axios para hacer los llamados a API's
import axios from 'axios'
//const API_URL = 'http://kiu.surnet.io:8080';

//helpers
import frecuencias from '../../helpers/frecuencias'

 



export class TiempoFinalizado extends Component {
  state = {
    modalTiempoFinalizado: true
  }
  
  toggle = () => {
    this.setState({
      modalTiempoFinalizado: !this.state.modalTiempoFinalizado
    });
  }
  render() {
    return (
      <div>
        <MDBModal isOpen={this.state.modalTiempoFinalizado} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            (...)
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    )
  }
}

export class RenderizadoPrueba extends Component{

  constructor(props){
    super(props);
    this.state ={
      nroRenderElemento: 2
    }
  }

  componentDidMount(){
      for (let indexRender = 0; indexRender < this.state.nroRenderElemento; indexRender++) {
      const nroRender = [indexRender];
      console.log('nro de render:', nroRender)
    }
  }

  render(){
    return(
      <div> 
        
      </div>
    )
  }
}




class index extends Component {

  constructor(props){
    super(props);

    this.state = {
      collapseIda: false,
      collapseVuelta: false,
      collapseDetalles: false,
      modalIda: false,
      modalVuelta: false,
      dateIda: new Date(),
      dateVuelta: new Date("2019-11-12"),
      vuelos: [],
      isFetch: 'true',
      fromFrecuency: [],
      toFrecuency: [],
      redireccion: false,
      botonContinuar: true,
      returnPage: "conviasa.aero",
      checkIda: false,
      checkVuelta: false
    } 
  }

  UNSAFE_componentWillMount() {

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
      headers: {'Content-Type':'application/json', 'Authorization':'R7c2CS4SYUGpyB31afs/TqcWX6Nuw9JrvsNwobyh5me/UoLdL6e0GxVNoqC3k2Zq'},
    }).then(response => response.data)
    .then((data) => {
      this.setState({vuelos: data, isFetch: false})  
      let [fromFrecuency, toFrecuency] = this.from(datosVuelos.go_info.origin, datosVuelos.go_info.destination)
      this.setState({fromFrecuency: fromFrecuency, toFrecuency: toFrecuency})
      console.log('datos de vuelos:',this.state.vuelos)
      console.log('Frecuencias Ida:',this.state.fromFrecuency)
      console.log('Frecuencias Vuelta:',this.state.toFrecuency)
    })
  }

  // componentDidMount() {
  //   const Minutes = 5
  //   this.startTimer(Minutes)
  //   /* this.showTimeOut = true
  //   this.timeout = setTimeout(function cerrar() {window.location.href = this.state.returnPage}, 30000 ) */
  // }


  // restartTimer() {
  //   const fiveMinutes = 60 * 7

  //   this.startTimer(fiveMinutes)
  //   this.showTimeOut = false
  //   clearTimeout(this.timeout)
  // }


  // startTimer(duration) {
  // we don't want to wait a full second before the timer starts
  //   let start = Date.now()
  //   let diff
  //   let minutes
  //   let seconds

  //   function _timer() {
  //     // get the number of seconds that have elapsed since
  //     // startTimer() was called

  //     diff = duration - (((Date.now() - start) / 1000) | 0)

  //     // does the same job as parseInt truncates the float
  //     if (diff <= 0) {
  //       // add one second so that the count down starts at the full duration
  //       // example 05:00 not 04:59
  //       // start = Date.now() + 1000

  //       if (diff === 0) {
  //         console.log('tiempo restante:', diff)
  //         return ( 
  //         <TiempoFinalizado />
          
  //       }

  //     } else {
  //       minutes = (diff / 60) | 0
  //       seconds = diff % 60 | 0

  //       minutes = minutes < 10 ? '0' + minutes : minutes
  //       seconds = seconds < 10 ? '0' + seconds : seconds
  //     }
  //   }
  //   _timer()
  //   setInterval(_timer, 1000)
  // }


  
  from(ida, vuelta) {
    const dates = frecuencias[ida];
    const {from, to} = dates[vuelta];
    return [from, to]
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

  toggleModalIda = () => {
    this.setState({
      modalIda: !this.state.modalIda
    });
  }

  toggleModalVuelta = () => {
    this.setState({
      modalVuelta: !this.state.modalVuelta
    });
  }

  setRedireccion = () =>{
    this.setState({
      redireccion: true
    })
  }

  redireccion = () => {
    if (this.state.redireccion) {
      return <Redirect to='/Pasajeros' />
    }
  }

  onChangeIda = dateIda => this.setState({ dateIda, modalIda: !this.state.modalIda })
  onChangeVuelta = dateVuelta => this.setState({ dateVuelta, modalVuelta: !this.state.modalVuelta })

  checkIda(event) {
    this.setState({
      checkIda: !this.checkIda
    })
    alert('seleccionado ida')
    if (this.state.checkVuelta) {
      console.log('Vuelo Ida')
    }
  }

  checkVuelta(event) {
    this.setState({
      checkVuelta: !this.checkVuelta
    })
    alert('seleccionado vuelta')
    if (this.state.checkIda) {
      console.log('Vuelo Vuelta')
    }
  }

  getPrice() {

  }

  errorPrice() {

  }

  render() {

    if (this.state.isFetch) {
      return(
        <div className="mt-5 h1 marginTop">
          <MDBCol className="marginTop">
            cargando petición...  
          </MDBCol>
        </div>
      )    
    }
    
    return (
      <div className="marginTop">
        <RenderizadoPrueba/>
        <ShowAt breakpoint="mediumAndBelow">
          <MDBRow center>
            <MDBBtn className="mb-1 caja" size="lg" block color="orange">Salir</MDBBtn>
          </MDBRow>
        </ShowAt>
        <MDBRow>
          <MDBCol sm="12" lg="8">
            <MDBRow className="h6">
              <MDBCol>
                <MDBRow id="primary">
                  <strong>Seleccione otra fecha de ída</strong>
                  <div>
                    <ShowAt breakpoint="mediumAndAbove">
                      <MDBTooltip placement="top">
                        <MDBBtn className="z-depth-0" flat style={{marginTop: "-15px"}}><MDBIcon size="2x" far icon="calendar-alt" onClick={this.toggleModalIda} /></MDBBtn>
                        <div>
                          Seleccione Fecha de Ida
                        </div>
                      </MDBTooltip>
                    </ShowAt>
                    <ShowAt breakpoint="small">
                      <MDBView hover zoom>
                        <MDBIcon className="px-2 hoverable cursorSenal" size="lg" far icon="calendar-alt" onClick={this.toggleModalIda} />
                      </MDBView>
                    </ShowAt>
                    <MDBModal isOpen={this.state.modalIda} toggle={this.toggleModalIda} size="sm">
                      <MDBRow center>
                        <Calendar
                        onChange={this.onChangeIda}
                        value={this.state.dateIda}
                        className="black-text"
                        minDate={new Date()}
                        maxDate={this.state.dateVuelta}
                        tileDisabled={
                          ({date}) => date.getDay() !== this.state.fromFrecuency[0]
                           && 
                           date.getDay() !== this.state.fromFrecuency[1]
                           &&
                           date.getDay() !== this.state.fromFrecuency[2]
                           &&
                           date.getDay() !== this.state.fromFrecuency[3]
                           &&
                           date.getDay() !== this.state.fromFrecuency[4]
                           &&
                           date.getDay() !== this.state.fromFrecuency[5]
                           &&
                           date.getDay() !== this.state.fromFrecuency[6]
                        }
                        />
                      </MDBRow>
                    </MDBModal>
                  </div>
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
                <VueloIda />
              </MDBCol>
            </MDBRow>
            <MDBRow className="h6">
              <MDBCol>
                <MDBRow id="primary">
                  <strong>Seleccione otra fecha de vuelta</strong>
                  <div>
                    <ShowAt breakpoint="mediumAndAbove">
                      <MDBTooltip placement="top">
                        <MDBBtn flat className="z-depth-0" style={{marginTop: "-15px"}} >
                          <MDBIcon size="2x" far icon="calendar-alt" onClick={this.toggleModalVuelta} />
                        </MDBBtn>
                        <div>
                          Seleccione fecha de vuelta
                        </div>
                      </MDBTooltip>
                    </ShowAt>
                    <ShowAt breakpoint="small">
                      <MDBView hover zoom>
                        <MDBIcon className="px-2 hoverable cursorSenal" size="lg" far icon="calendar-alt" onClick={this.toggleModalVuelta} />
                      </MDBView>
                    </ShowAt>
                    <MDBModal isOpen={this.state.modalVuelta} toggle={this.toggleModalVuelta} size="sm">
                      <MDBRow center>
                        <Calendar
                        onChange={this.onChangeVuelta}
                        value={this.state.dateVuelta}
                        className="black-text"
                        minDate={this.state.dateIda}
                        tileDisabled={({date}) => date.getDay() !== this.state.toFrecuency[0]
                        && 
                        date.getDay() !== this.state.toFrecuency[1]
                        &&
                        date.getDay() !== this.state.toFrecuency[2]
                        &&
                        date.getDay() !== this.state.toFrecuency[3]
                        &&
                        date.getDay() !== this.state.toFrecuency[4]
                        &&
                        date.getDay() !== this.state.toFrecuency[5]
                        &&
                        date.getDay() !== this.state.toFrecuency[6]
                      }
                        />
                      </MDBRow>
                    </MDBModal>
                  </div>
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
                <VueloVuelta />
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
                <MDBRow center>
                  {this.redireccion()}
                  <MDBBtn disabled={this.state.botonContinuar} onClick={this.setRedireccion} className="z-depth-2" block color="orange">Reservar</MDBBtn>
                </MDBRow>
                <MDBRow className="mt-3">
                  <MDBCol>
                    <MDBRow className="z-depth-2 colorConviasa py-3" between>
                      <MDBIcon icon="plane" size="2x" className="ml-3"/>
                      <strong className="ml-4 text-left h5 white-text" >IDA</strong>
                      <MDBIcon icon="angle-down" size="2x" className="white-text mr-4 text-center cursorSenal" onClick={this.toggleCollapseIda("ida")}/>
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
                    <MDBRow className="z-depth-2 colorConviasa py-3" between>
                      <MDBIcon icon="plane" size="2x" className="ml-3"/>
                      <strong className="ml-4 text-left h5 white-text">VUELTA</strong>
                      <MDBIcon icon="angle-down" size="2x" className="white-text pr-4 cursorSenal" onClick={this.toggleCollapseVuelta("vuelta")}/>
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
                    <MDBRow className="z-depth-2 colorConviasa py-3" between>
                      <strong className="ml-4 text-left h5 white-text">Detalles</strong>
                      <MDBIcon icon="angle-down" size="2x" className="white-text pr-4 cursorSenal" onClick={this.toggleCollapseDetalles("detalles")}/>
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