import React, { Component } from 'react'
import { 
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
  MDBInputGroup,
} from "mdbreact"
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons'
import { ShowAt, HideAt } from 'react-with-breakpoints'


function PagaloFacilDebito() {
  return <div>
    <MDBRow className="colorConviasa mt-4 py-4">
      <MDBCol>
        <MDBRow >
          <strong className="h5 white-text ml-3">Introduzca sus datos</strong>    
        </MDBRow>
      </MDBCol>
    </MDBRow>
    <MDBRow className="white">
      <MDBCol md="4">
        <MDBInput type="text" label="Cédula" />
      </MDBCol>
      <MDBCol md="4" className="mt-4">
        <select class="browser-default custom-select">
          <option value="" disabled selected>Seleccione su banco</option>
          <option value="Tesoro">Banco del Tesoro</option>
        </select>
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
  return <div>

    <MDBRow className="mt-4">
      <MDBCol className="colorAccent">
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

  cambiarMetodo = value => {
    console.log(value)
    this.setState({TipoPago: value})
  }

  render(){
    return (
      <div>
        <HideAt breakpoint="mediumAndBelow">
          <RadioGroup onChange={ this.cambiarMetodo } horizontal>
            <ReversedRadioButton pointColor='#EE7500'  rootColor="#717171" value="tdd">
              PagaloFacil Debito
            </ReversedRadioButton>
            <ReversedRadioButton pointColor='#EE7500'  rootColor="#717171" value="trf">
              PagaloFacil Transferencia
            </ReversedRadioButton>
            <ReversedRadioButton pointColor='#EE7500'  rootColor="#717171" value="tdc">
              Visa y mastercard
            </ReversedRadioButton>
            <ReversedRadioButton pointColor='#EE7500'  rootColor="#717171"n value="petro">
              Petro
            </ReversedRadioButton>
          </RadioGroup>
        </HideAt>
        <ShowAt breakpoint="mediumAndBelow">
          <RadioGroup onChange={ this.cambiarMetodo } className="mt-3">
            <ReversedRadioButton pointColor='#EE7500'  rootColor="#717171" value="tdd">
              PagaloFacil Debito
            </ReversedRadioButton>
            <ReversedRadioButton pointColor='#EE7500'  rootColor="#717171" value="trf">
              PagaloFacil Transferencia
            </ReversedRadioButton>
            <ReversedRadioButton pointColor='#EE7500'  rootColor="#717171" value="tdc">
              Visa y mastercard
            </ReversedRadioButton>
            <ReversedRadioButton pointColor='#EE7500'  rootColor="#717171"n value="petro">
              Petro
            </ReversedRadioButton>
          </RadioGroup>
        </ShowAt>
        <FormularioPagos metodoPago={this.state.TipoPago} />
      </div>
    )
  }
}
