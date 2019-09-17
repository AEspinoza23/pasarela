import React from 'react';
import { MDBModal, MDBIcon, MDBView, MDBRow} from 'mdbreact';
import Calendar from 'react-calendar'
import '../../index.css'

const moment = require('moment');
moment.locale('es')

export default class Datepicker extends React.Component {
  state = {
    modal: false,
    date: new Date(),
    fechaIda: '',
    fechaRegreso: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = date => this.setState({ date, modal: !this.state.modal })
 
  render() {
    return (
      <div>
        <MDBView hover zoom>
          <MDBIcon className="px-2 hoverable cursorSenal" size="lg" far icon="calendar-alt" onClick={this.toggle} />
        </MDBView>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="sm">
          <MDBRow center>
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
              className="black-text"
            onChange={this.onChange}
            value={this.state.date}
            className="black-text"
            minDate={new Date()}
            />
          </MDBRow>
        </MDBModal>
      </div>
    );
  }
}