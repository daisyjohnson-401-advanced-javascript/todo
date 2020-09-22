import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TodoForm = (props) => {

  const [item, changeItem] = useState({});


const handleInputChange = (e) => {
    changeItem({ item, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    changeItem({});
  };

    return (
      <>
       <Form onSubmit={handleSubmit}>
        <Card style={{ width: '22rem' }}>
          <Card.Body>
            <Card.Title><h3>Add To Do Item</h3></Card.Title>
       
          <Form.Group controlId="formAddItem">
          <Form.Label><h5>To Do Item</h5></Form.Label>
          <Form.Control name="text"
              placeholder="Item Details"
              onChange={handleInputChange}/>
          </Form.Group>
        <Form.Group controlId="formAssign">
          <Form.Label><h5>Assigned To</h5></Form.Label>
            <Form.Control type="text" name="assignee" placeholder="Asignee Name" onChange={handleInputChange}/>
          
          </Form.Group>
          <Form.Group controlId="formDifficulty">
          <Form.Label><h5>Difficulty Rating</h5></Form.Label>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange}/>
          </Form.Group>


          <Button variant="primary" type="submit">Add Item</Button>{' '}
        
        </Card.Body>
        </Card>
        </Form>
      </>
    );
  }

export default TodoForm;
