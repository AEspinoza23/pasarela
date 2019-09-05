import React, { Component } from 'react'


function PagaloFacilDebito() {
  return <div>
    <MDBRow className="white">
      <MDBCol md="4">
        <MDBInput type="text" label="Nombre Titular" />
      </MDBCol>
      <MDBCol md="4">
        <MDBInput type="text" label="Apellido Titular" />
      </MDBCol>
      <MDBCol md="4">
        <MDBInput type="text" label="Email del Titular" />
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
  </div>
}

function PagaloFacilTrf(){
  return <div>
    mensaje PagaloFacilTrf
  </div>
}

function TarjetaCredito(){
  <MDBRow className="mt-4">
    <MDBCol className="colorAccent">
      <MDBRow className="colorConviasa py-4">
        <MDBCol>
          <MDBRow center >
            <input type="radio" className="mr-2 mt-1 white-text"/><p>Tarjeta de Crédito</p>
            <input type="radio" className="mr-2 mt-1"/><p>Petro Pago</p>
          </MDBRow>
          <MDBRow >
            <strong className="h5 white-text ml-3">Introduzca los datos de su Tarjeta</strong>    
          </MDBRow>
        </MDBCol>
      </MDBRow>
      <MDBRow  start className="py-2 white">
        <MDBIcon fab className="ml-2 grey-text" icon="cc-visa" size="3x"/>
        <MDBIcon fab className="ml-2 grey-text" icon="cc-mastercard" size="3x"/>
      </MDBRow>
      <MDBRow className="white">
        <MDBCol md="6">
          <MDBInput type="text" label="Nombre Titular de la Tarjeta" />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput type="email" label="Email del Titular" />
        </MDBCol>
      </MDBRow>
      <MDBRow className="white">
        <MDBCol md="4">
          <MDBInput type="number" label="Cédula"/>
        </MDBCol>
        <MDBCol md="4">
          <MDBInput type="number" label="N° de Tarjeta"/>
        </MDBCol>
        <MDBCol md="4">
          <MDBInput type="number" label="Cód.Seguridad"/>
        </MDBCol>
      </MDBRow>
      <MDBRow className="white">
        <MDBCol md="6">
          <MDBInputGroup
            containerClassName="mt-4"
            inputs={
              <select className="browser-default custom-select">
                <option value="0">Mes de Vencimiento</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            }
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBInputGroup
            containerClassName="mt-4"
            inputs={
              <select className="browser-default custom-select">
                <option value="0">Año de Vencimiento</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            }
          />
        </MDBCol>
      </MDBRow>
      <MDBRow className="white">
        <MDBCol md="3">
          <MDBInputGroup
            containerClassName="mt-4"
            inputs={
              <select className="browser-default custom-select">
                <option value="0">País emisor de la tarjeta</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            }
          />
        </MDBCol>
        <MDBCol md="3">
          <MDBInputGroup
            containerClassName="mt-4"
            inputs={
              <select className="browser-default custom-select">
                <option value="0">Código telefonico del país</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            }
          />
        </MDBCol>
        <MDBCol md="3">
          <MDBInput type="number" label="Código de área"/>
        </MDBCol>
        <MDBCol md="3">
          <MDBInput type="number" label="N° de Teléfono"/>
        </MDBCol>
      </MDBRow>
    </MDBCol>
  </MDBRow>
}

export default class formularioPagos extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
