import React from 'react';
import ModernDatepicker from 'react-modern-datepicker';
import { MDBModalBody, MDBModal, MDBModalHeader, MDBIcon, MDBView, MDBBtn, MDBModalFooter } from 'mdbreact';

export default class Datepicker extends React.Component {
  state = {
    modal: false
  }

  constructor(props) {
    super(props);
    this.state = {
        startDate: new Date(), // can be any of these ['dayjs()', '', null, new Date(2018,12,1)]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
 
  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }
 
  render() {
    return (
      <div>
        <MDBView hover zoom>
          <MDBIcon className="px-2 hoverable" size="lg" far icon="calendar-alt" onClick={this.toggle} />
        </MDBView>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader className="colorConviasa" toggle={this.toggle}>Fecha ída</MDBModalHeader>
          <MDBModalBody>
            <ModernDatepicker
              date={this.state.startDate}
              format={'DD-MM-YYYY'}
              showBorder
              onChange={date => this.handleChange(date)}
              placeholder={'Seleccione una fecha'}
              primaryColor={'#EE7500'}
              secondaryColor={'white'}
              primaryTextColor={'#EE7500'}
              secondaryTextColor={'white'}

            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="orange" onClick={this.toggle}>Aceptar</MDBBtn>
        </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}