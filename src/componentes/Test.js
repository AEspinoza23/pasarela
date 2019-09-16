import React, { Component } from 'react'
import {MDBRow, MDBCol} from 'mdbreact'

class Test extends Component {
  render() {
    return (
      <div>
        <MDBRow className="grey" center>
          <MDBCol md="5">
            <form action="http://localhost:3000/" method="POST">
              <input
                type="text"
                label="itinerary"
                name="itinerary"
                value="CCS_GYE_2019-08-29.GYE_CCS_2019-09-02"
                className="form-control my-3"
              />
              <input 
                type="text"
                className="form-control"
                label="travelers"
                name="travelers"
                value="A:1_C:0_I:0"
              />
              <input 
                type="text"
                className="form-control my-3"
                label="currency"
                name="currency"
                value="USD"
              />
              <input 
                type="text"
                className="form-control"
                label="scope"
                name="scope"
                value="I"
              />
              <input type="submit" className="my-3"/>
            </form>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}

export default Test