import React, { Component } from 'react'
import './pantallaCarga.css'
import logoLoader from '../Global/img/logoLoader.png'
import { MDBCol } from 'mdbreact'

export default class pantallaCarga extends Component {
  render() {
    return (
      <div>
        <MDBCol id="contenedor_carga">
          <div id="carga"></div>
          <img alt="Imagen Carga" id="imagen" height="120" src={logoLoader} />
          <div className="text-center text-white h6" style={{marginTop: '550px'}}>Por favor espere un momento su petición esta siendo procesada.</div>
        </MDBCol>
      </div>
    )
  }
}
