/* global document: true location: true */

import React from 'react';
import ReactDOM from 'react-dom';

/* eslint-disable import/extensions */

import MessagesComponent from './MessagesComponent.jsx';
import ChatInputComponent from './ChatInputComponent.jsx';

/* eslint-enable import/extensions */

const io = require('socket.io-client');

const socket = io.connect(`http://${document.domain}:${location.port}`);
socket.on('connect', () => console.log('Connected'));

const ChatBar = () => (
  <div>
    <MessagesComponent socket={socket} />
    <ChatInputComponent socket={socket} />
  </div>
);

ReactDOM.render(<ChatBar />, document.getElementById('sidebar'));
