import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <>
      <style type="text/css">
        {`
        .mr-auto {
          color: white;
        }
        `}
        
      </style>
      <Navbar bg="primary" variant="light" expand="lg">
        <Nav className="mr-auto">
          
        <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar>
        <ToDo />
      </>
    );
  }
}
