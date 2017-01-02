/* global document: true location: true */
import React, { Component } from 'react';
import {
  FormControl,
  FormGroup,
  InputGroup,
  Button,
} from 'react-bootstrap';

export default class ChatInputComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    // Bind methods
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.onSend();
    }
  }

  onSend() {
    this.props.socket.emit('submit_message', { data: this.state.value });
    this.setState({ value: '' });
  }

  render() {
    return (
      <FormGroup>
        <InputGroup>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Type message here"
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
          />
          <InputGroup.Button>
            <Button type="submit" onClick={this.onSend}>Send</Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    );
  }

}

ChatInputComponent.propTypes = {
  socket: React.PropTypes.object.isRequired,
};
