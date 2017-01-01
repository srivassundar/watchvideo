/* global document: true */
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';


const buttonsInstance = (
  <ButtonToolbar>
    {/* Standard button */}
    <Button bsSize="large">Default</Button>

    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
    <Button bsStyle="primary">Primary</Button>

    {/* Indicates a successful or positive action */}
    <Button bsStyle="success">Success</Button>

    {/* Contextual button for informational alert messages */}
    <Button bsStyle="info">Info</Button>

    {/* Indicates caution should be taken with this action */}
    <Button bsStyle="warning">Warning</Button>

    {/* Indicates a dangerous or potentially negative action */}
    <Button bsStyle="danger">Danger</Button>

    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
    <Button bsStyle="link">Link</Button>
  </ButtonToolbar>
);

ReactDOM.render(buttonsInstance, document.getElementById('content'));

// class RealPython extends React.Component {
//   render() {
//     return (<h2>Greetings, from Real Python!</h2>);
//   }
// }

// $(document).ready(() => {
//   ReactDOM.render(<RealPython />, $('#content')[0]);
// });
