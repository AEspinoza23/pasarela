import React, { Component } from 'react'
import { MDBCol, MDBRow, MDBBtn } from 'mdbreact';
import "../../index.css";
import { Link } from 'react-router-dom'


export default class index extends Component {
  render() {
    return (
      <div className="marginTop">
        <MDBRow center className="mt-5">
          <MDBCol id="primary" center md="9">
            <p className="h2">RESUMEN DE COMPRA</p>
          </MDBCol>
        </MDBRow>
        <MDBRow center>
          <MDBCol id="secondary" center md="9">
            <p className="h6">
              ELECTRONIC TICKET / BOLETO ELECTRONICO *DUPLICADO - NO VALIDO
              PARA CREDITO FISCAL*
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow center >
          <MDBCol id="accent" md="9" >
            <MDBRow className="border-bottom border-dark h6">
              <MDBCol>
                ITINERARIO:
              </MDBCol>
              <MDBCol>
                <p>IDA:CCS-PMV</p>
                <p>VUELTA: PMV-CCS</p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-3 border-bottom border-dark h6">
              <MDBCol>
                RESERVA:
              </MDBCol>
              <MDBCol>
                <p>412312534</p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-3 border-bottom border-dark">
              <MDBCol className="h6">
                VUELO NUM:
              </MDBCol>
              <MDBCol className="h6">
                <p>CCS-PMV: 1234567</p>
                <p>PMV-CCS: 8910111</p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="border-bottom border-dark">
              <MDBCol className="h6">
                SALIDA:
              </MDBCol>
              <MDBCol>
                <MDBRow>
                  <MDBCol className="colorConviasa paddingCaja white-text h6">
                    <div>Ida: CCS-PMV</div>
                    <div>Día: 12/12/2019</div>
                    <div>Hora: 12:00 PM</div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol className="colorConviasa paddingCaja white-text h6">
                    <div>Vuelta: PMV-CCS</div>
                    <div>Día: 30/12/2019</div>
                    <div>Hora: 12:00 PM</div>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <MDBRow className="border-bottom border-dark">
              <MDBCol className="h6">
                LLEGADA:
              </MDBCol>
              <MDBCol>
                <MDBRow>
                  <MDBCol className="colorConviasa paddingCaja white-text h6">
                    <div>Ida: CCS-PMV</div>
                    <div>Día: 12/12/2019</div>
                    <div>Hora: 12:00 PM</div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol className="colorConviasa paddingCaja white-text h6">
                    <div>Vuelta: PMV-CCS</div>
                    <div>Día: 30/12/2019</div>
                    <div>Hora: 12:00 PM</div>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-3 border-bottom border-dark h6">
              <MDBCol>
                DURACIÓN:
              </MDBCol>
              <MDBCol>
                <p>IDA:10:00</p>
                <p>VUELTA: 19:00</p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-3 border-bottom border-dark h6">
              <MDBCol>
                CLASE:
              </MDBCol>
              <MDBCol>
                <p>IDA: W</p>
                <p>VUELTA: W</p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-3 border-bottom border-dark h6">
              <MDBCol>
                COSTO BOLETO(S):
              </MDBCol>
              <MDBCol>
                <p>300000</p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-3 border-bottom border-dark h6">
              <MDBCol>
                IMPUESTOS:
              </MDBCol>
              <MDBCol>
                <p>10000</p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-3 border-bottom border-dark h6">
              <MDBCol>
                TOTAL:
              </MDBCol>
              <MDBCol>
                <p>310000</p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-3 border-bottom border-dark h6">
              <MDBCol>
                TICKET NRO:
              </MDBCol>
              <MDBCol>
                <p>123123123123</p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-3 border-bottom border-dark h6">
              <MDBCol>
                PASAJERO(S):
              </MDBCol>
              <MDBCol>
                <p>MRS Julian de las Casas</p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-3 border-bottom border-dark h6">
              <MDBCol>
                TELEFONOS:
              </MDBCol>
              <MDBCol>
                <p>+58 4145595599</p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-3 border-bottom border-dark h6">
              <MDBCol>
                EMAIL:
              </MDBCol>
              <MDBCol>
                <p>test@prueba.io</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBRow center className="border-bottom border-white">
          <MDBCol id="secondary" center md="9">
            <p className="h6">
              * AL MOMENTO DEL CHECK-IN DEBERA PRESENTAR UN DOCUMENTO OFICIAL DE IDENTIDAD CON FOTOGRAFIA:\ CEDULA DE IDENTIDAD,
              PASAPORTE. AT THE CHECK-IN PROCESS, PASSENGERS MUST SHOW AN OFFICIAL IDENTIFICATION DOCUMENT WITH PHOTO:\ ID,
              IDENTIFY CARD, PASSPORT.ENDORSEMENT/ENDOSOS-RESTRICCIONES: NON END/NON REF/ NO SHOW PENALTY APPUESTOUR
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow center className="border-bottom border-white">
          <MDBCol id="secondary" center md="9">
            <p className="h6">
              *ETKT VALIDO POR 12 MESES A PARTIR DE LA FECHA DE EMISION CONSULTE LAS CONDICIONES EN: TARIFA SUJETA
              A CAMBIOS SIN PREVIO AVISO . CONDICIONES Y RESTRICCIONES APLICAN *SIRVASE INFORMARNOS SI TIENE UN VUELO EN CONEXION*
              PRESENTARSE EN EL AEROPUERTO 2 HORAS ANTES EN VUELOS NACIONALES Y 4 HORAS EN VUELOS INTERNACIONALES*, EN TEMPORADAS
              ALTAS POR FAVOR AGREGAR 1 HORA A LAS PREVIAMENTE MENCIONADAS.*EN CASO DE NO VOLAR EN LA FECHA INDICADA NUESTRO SISTEMA
              CANCELARA AUTOMATICAMENTE SU VUELO DE RETORNO.* APLICA PENALIDAD DEL 50 POR CIENTO DEL VALOR DEL TRAYECTO EN EL CUAL
              EL PASAJERO SEA NO SHOW
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow center>
          <MDBCol id="secondary" center md="9">
            <p className="h6">
              FARE RESTRICTIONS AND TRANSPORTATION TERMS: *ETKT VALID FOR ONE YEAR FROM THE ISSUE DATE. CONDITIONS AT:
              FARE MAY CHANGE WITHOUT NOTICE. CONDITIONS AND RESTRICTIONS MAY APPLY.* IF YOU HAVE A CONNECTING
              FLIGHTS.* IN HIGH SEASONS PLEASE ADD 1 HOUR.* IN CASE OF NO SHOW OUR SYSTEM WILL CANCEL YOUR RETURN OR CONTINLING FLIGHT*
              APPLY PENALTY OF 50 PERCENT OF THE VALUE OF THE WAY IN WHICH THE PASSENGER IS NO SHOW.
            </p>
          </MDBCol>
        </MDBRow>
        <Link to="/">
          <MDBRow center>
            <MDBCol sm="12" md="9">
              <MDBRow className="caja" center>
                <MDBBtn block color="grey" className="mb-1">Continuar</MDBBtn>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </Link>
      </div>
    )
  }
}
