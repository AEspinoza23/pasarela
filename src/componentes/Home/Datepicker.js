import React from 'react';
import { MDBModal, MDBIcon, MDBView, MDBRow} from 'mdbreact';
import Calendar from 'react-calendar'


export default class Datepicker extends React.Component {
  state = {
    modal: false,
    date: new Date()
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <MDBView hover zoom>
          <MDBIcon className="px-2 hoverable" size="lg" far icon="calendar-alt" onClick={this.toggle} />
        </MDBView>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="sm">
          <MDBRow center>
            <Calendar
            onChange={this.onChange}
            value={this.state.date}
            className="black-text"
            />
          </MDBRow>
        </MDBModal>
      </div>
    );
  }
}