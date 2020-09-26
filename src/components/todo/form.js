import React from 'react';

import useForm from '../../hooks/useForm.js';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const TodoForm = props => {

  const { handleChange, handleSubmit } = useForm(props.handleSubmit);

    return (
      <>
      <Form onSubmit={handleSubmit}>
        <Card>
          <Card.Body>
            <Card.Title><h3>Add To Do Item</h3></Card.Title>

       
          <Form.Group controlId="formAddItem">
          <Form.Label><h5>To Do Item</h5></Form.Label>
          <Form.Control onChange={handleChange} name="text" placeholder="Item Details" />
          </Form.Group>
          
        <Form.Group controlId="formAssign">
          <Form.Label><h5>Assigned To</h5></Form.Label>
            <Form.Control onChange={handleChange} type="text" name="assignee" placeholder="Asignee Name"/>
          
          </Form.Group>
          <Form.Group controlId="formDifficulty">
          <Form.Label><h5>Difficulty Rating</h5></Form.Label>
          <Form.Control onChange={handleChange} defaultValue="1" type="range" min="1" max="5" name="difficulty"/>
          </Form.Group>

          <Button variant="primary" type="submit">Add Item</Button>{' '}
        </Card.Body>
        </Card>
        
       </Form>
      </>
    );
  }

export default TodoForm;
