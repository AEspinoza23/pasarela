import React, { Component } from 'react'
import { 
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
  MDBInputGroup,
} from "mdbreact"
import "../../index.css";
import pftdd from '../Global/img/pftdd.png'
import pftrf from '../Global/img/pftrf.png'
import pftdc from '../Global/img/pftdc.png'
import petro from '../Global/img/petro.png'

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
      <MDBCol md="4" className="my-4">
        <select className="browser-default custom-select">
          <option value="" disabled selected>Seleccione su banco</option>
          <option value="Tesoro">Banco del Tesoro, C.A. Banco Universal</option>
          <option value="Activo">Banco Activo, C.A. Banco Universal</option>
        </select>
      </MDBCol>
    </MDBRow>
  </div>
}

function PagaloFacilTrf(){
  return <div className="colorAccent caja">
    <MDBCol>
      <MDBRow center id="secondary" className="my-3">
        <div>
          <MDBIcon icon="info-circle" /> Por los momentos solo serán procesadas transferencias 
          desde los bancos listados al Banco del Tesoro. Si usted 
          realiza la transferencia desde otro banco no listado, no será procesada.
        </div>
        <div>
          <MDBIcon icon="info-circle" /> Para soporte o requerimientos: ingresar en el portal web en la pestaña "Atención al Pasajero".
        </div>
      </MDBRow>
      <MDBRow id="accent">
        <div className="h5">Instrucciones de pago</div>
      </MDBRow>
      <MDBRow id="accent">
        <MDBCol left sm="12" xl="6"  className="my-3">
          <div className="h5 text-justify" >
            <span className="h3">1) </span> Solo transferir el monto completo desde el:
          </div>
          <div className="text-justify">
            <div>
              BANESCO BANCO UNIVERSAL, C.A.
            </div>
            <div>
              BANCO DE VENEZUELA, S.A. BANCO UNIVERSAL
            </div>
            <div>
              BANCO NACIONAL DE CREDITO C.A
            </div>
            <div>
              BANCO PROVINCIAL, S.A BANCO UNIVERSAL
            </div>
            <div>
              BANCO ACTIVO, BANCO UNIVERSAL
            </div>
            <div>
              BANPLUS ENTIDAD DE AHORRO Y PRESTAMO C.A
            </div>
            <div>
              BANCO PLAZA, C.A
            </div>
            <div>
              BANCO MERCANTIL, C.A., BANCO UNIVERSAL
            </div>
            <div>
              BANCO FONDOCOMUN, C.A., BANCO UNIVERSAL
            </div>
            <div>
              BANCARIBE C.A
            </div>
            <div>
              BANPLUS BANCO UNIVERSAL
            </div>
            <div>
              VENEZOLANO DE CREDITO S.A. BANCO UNIVERSAL
            </div>
            <div>
              BANCO EXTERIOR, C.A., BANCO UNIVERSAL
            </div>
            <div>
              BANCAMIGA BANCO UNIVERSAL
            </div>
          </div>
            </MDBCol>
        <MDBCol sm="12" xl="6"  className="my-3 text-justify">
          <span className="h3">2) </span>
          Las instrucciones detalladas serán enviadas al correo electrónico ingresado por el pagador.
        </MDBCol>
        <MDBCol sm="12" xl="6" className="text-justify">
          <span className="h3">3) </span>
          La emisión del boleto se hará efectiva el día hábil siguiente después de las 8:00pm.
          RECUERDA QUE TIENES DOS (02) HORAS PARA REALIZAR LA TRANSFERENCIA Y COMPLETAR LA COMPRA.
        </MDBCol>
        <MDBCol sm="12" xl="6" className="text-justify">
          <span className="h3">4) </span>
          Para completar la transaccón debe oprimir el botón "Continuar".
        </MDBCol>
      </MDBRow>
    </MDBCol>
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
          <MDBRow center className="colorAccent caja radio radioMetodoPago">
            <MDBCol className="my-2" sm="12" md="3">
              <input onChange={this.cambiarMetodo} value="tdd" name="metodoPago" type="radio" id="pfdebito"></input>
              <label htmlFor="pfdebito"><img alt="imagen debito" src={pftdd} className="img-fluid" /></label>
            </MDBCol>
            <MDBCol className="my-2" sm="12" md="3">
              <input onChange={this.cambiarMetodo} value="trf" name="metodoPago" type="radio" id="pftrf"></input>
              <label htmlFor="pftrf"><img alt="imagen transferencia" src={pftrf} className="img-fluid" /></label>
            </MDBCol>
            <MDBCol className="my-2" sm="12" md="3">
              <input onChange={this.cambiarMetodo} value="tdc" name="metodoPago" type="radio" id="credito"></input>
              <label htmlFor="credito"><img alt="imagen credito" src={pftdc} className="img-fluid"  /></label>
            </MDBCol>
            <MDBCol className="my-2" sm="12" md="3">
              <input onChange={this.cambiarMetodo} value="petro" name="metodoPago" type="radio" id="petro"></input>
              <label htmlFor="petro"><img alt="petro" src={petro} className="img-fluid" /></label>
            </MDBCol>
          </MDBRow>       
        </form>
        <FormularioPagos metodoPago={this.state.TipoPago} />
      </div>
    )
  }
}
