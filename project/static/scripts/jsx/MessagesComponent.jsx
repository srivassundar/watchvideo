/* global document: true location: true */
import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

export default class MessagesComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: props.messages || [],
    };
    const socket = props.socket;
    socket.on('new_message', (msg) => {
      const messages = this.state.messages;
      messages.push(msg.data);
      this.setState({ messages });
    });
    socket.emit('messages_request');
    socket.on('messages_response', msg => this.setState({ messages: msg.data }));
  }

  render() {
    const messagesList = [];
    const messages = this.state.messages;
    for (let i = 0; i < messages.length; i += 1) {
      const message = messages[i];
      messagesList.push(<ListGroupItem key={message}>{message}</ListGroupItem>);
    }
    return (
      <div style={{ overflowY: 'auto' }}>
        <ListGroup>
          {messagesList}
        </ListGroup>
      </div>
    );
  }

}

MessagesComponent.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.string),
  socket: React.PropTypes.object.isRequired,
};
