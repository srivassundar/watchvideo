/* global document: true location: true */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  ListGroup,
  ListGroupItem,
  FormControl,
  FormGroup,
  InputGroup,
  Button,
} from 'react-bootstrap';

const io = require('socket.io-client');

class ChatBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: props.messages,
      value: '',
    };
    const socket = io.connect(`http://${document.domain}:${location.port}`);
    this.state.socket = socket;
    socket.on('connect', () => console.log('Connected'));
    socket.on('new_message', (msg) => {
      const messages = this.state.messages;
      messages.push(msg.data);
      this.setState({ messages });
    });

    // Bind methods
    this.onChange = this.onChange.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  onChange(e) {
    this.setState({ value: e.target.value });
  }

  onSend() {
    this.state.socket.emit('submit_message', { data: this.state.value });
    this.setState({ value: '' });
  }

  render() {
    const messagesList = [];
    const messages = this.state.messages;
    for (let i = 0; i < messages.length; i += 1) {
      const message = messages[i];
      messagesList.push(<ListGroupItem key={message}>{message}</ListGroupItem>);
    }
    return (
      <div>
        <ListGroup>
          {messagesList}
        </ListGroup>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Type message here"
              onChange={this.onChange}
            />
            <InputGroup.Button>
              <Button type="submit" onClick={this.onSend}>Send</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </div>
    );
  }

}

ChatBar.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.string),
};

const testMessages = [
  'Hello',
  'How\'s it going?',
];

ReactDOM.render(<ChatBar messages={testMessages} />, document.getElementById('sidebar'));
