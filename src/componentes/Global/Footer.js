import React, { Component } from 'react'
import {MDBRow, MDBBtn, MDBIcon} from "mdbreact"
import "./index.css"

class index extends Component {
  render() {
    return (
      <div className="mt-5">
        <MDBRow className="colorConviasa" center>
          <MDBBtn flat className="z-depth-0 white-text">
            <MDBIcon fab icon="twitter" size="2x"/>
          </MDBBtn>
          <MDBBtn flat className="z-depth-0 white-text">
            <MDBIcon fab icon="instagram" size="2x"/>
          </MDBBtn>
          <MDBBtn flat className="z-depth-0 white-text">
            <MDBIcon fab icon="facebook-square" size="2x"/>
          </MDBBtn>
        </MDBRow>
        <MDBRow className="colorConviasaG" center>
          <p className="white-text mt-3">Surnet Telecom  &copy; {new Date().getFullYear()}</p>
        </MDBRow>
      </div>
    )
  }
}

export default index
