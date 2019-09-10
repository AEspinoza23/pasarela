import React, { Component } from 'react'
import { 
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
  MDBInputGroup,
} from "mdbreact"
import "../../index.css";

function PagaloFacilDebito() {
  return <div>
    <MDBRow className="colorConviasa caja py-4">
      <MDBCol>
        <MDBRow >
          <strong className="h5 white-text ml-3">Introduzca sus datos</strong>    
        </MDBRow>
      </MDBCol>
    </MDBRow>
    <MDBRow className="colorAccent caja">
      <MDBCol md="4">
        <MDBInput type="text" label="Cédula" />
      </MDBCol>
      <MDBCol md="4" className="mt-4">
        <select className="browser-default custom-select">
          <option value="" disabled selected>Seleccione su banco</option>
          <option value="Tesoro">Banco del Tesoro</option>
        </select>
      </MDBCol>
    </MDBRow>
  </div>
}

function PagaloFacilTrf(){
  return <div className="colorAccent caja">
    mensaje PagaloFacilTrf
  </div>
}

function TarjetaCredito(){
  return <div>

    <MDBRow>
      <MDBCol className="colorAccent caja">
        <MDBRow className="colorConviasa py-4">
          <MDBCol>
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
  </div>
}

function FormularioPagos(props) {
  let metodo = props.metodoPago
  if(metodo === 'tdd') {
    return <PagaloFacilDebito />
  } else if (metodo === 'trf') {
    return <PagaloFacilTrf />
  } else if (metodo === 'tdc') {
    return <TarjetaCredito />
  } else {
    return <div></div>
  }
}

export class SelectorPagos extends Component {
  constructor(props) {
    super(props);
    this.state = {TipoPago: ''};
  }

  cambiarMetodo = changeEvent => {
    this.setState({
      TipoPago: changeEvent.target.value
    })
    console.log(this.state.TipoPago) 
  }

  render(){
    return (
      <div>
        <form className="formulario">
          <MDBRow center className="colorConviasaG caja radio">
            <MDBCol className="my-2" sm="12" md="3">
              <input onChange={this.cambiarMetodo} value="tdd" name="metodoPago" type="radio" id="pfdebito"></input>
              <label htmlFor="pfdebito">PF Debito</label>
            </MDBCol>
            <MDBCol className="my-2" sm="12" md="3">
              <input onChange={this.cambiarMetodo} value="trf" name="metodoPago" type="radio" id="pftrf"></input>
              <label htmlFor="pftrf"> PF Transferencia</label>
            </MDBCol>
            <MDBCol className="my-2" sm="12" md="3">
              <input onChange={this.cambiarMetodo} value="tdc" name="metodoPago" type="radio" id="credito"></input>
              <label htmlFor="credito">Credito</label>
            </MDBCol>
            <MDBCol className="my-2" sm="12" md="3">
              <input onChange={this.cambiarMetodo} value="petro" name="metodoPago" type="radio" id="petro"></input>
              <label htmlFor="petro">Petro Pago</label>
            </MDBCol>
          </MDBRow>       
        </form>
        <FormularioPagos metodoPago={this.state.TipoPago} />
      </div>
    )
  }
}
