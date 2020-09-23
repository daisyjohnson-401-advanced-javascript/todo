import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useForm from '../../hooks/useForm.js';

const TodoForm = (props) => {

  const [ handleSubmit, handleChange, values] = useForm(props.handleSubmit);

//   const [item, changeItem] = useState({});


// const handleInputChange = (e) => {
//     changeItem({...item, [e.target.name]: e.target.value });
//   };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     props.handleSubmit(item, 'item');
//     changeItem({});
//   };

    return (
      <>
       
        <Card>
          <Card.Body>
            <Card.Title><h3>Add To Do Item</h3></Card.Title>

       <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formAddItem">
          <Form.Label><h5>To Do Item</h5></Form.Label>
          <Form.Control name="text" placeholder="Item Details" onChange={handleChange}/>
          </Form.Group>
          
        <Form.Group controlId="formAssign">
          <Form.Label><h5>Assigned To</h5></Form.Label>
            <Form.Control type="text" name="assignee" placeholder="Asignee Name" onChange={handleChange}/>
          
          </Form.Group>
          <Form.Group controlId="formDifficulty">
          <Form.Label><h5>Difficulty Rating</h5></Form.Label>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleChange}/>
          </Form.Group>


          <Button variant="primary" type="submit">Add Item</Button>{' '}
         </Form>
        </Card.Body>
        </Card>
       
      </>
    );
  }

export default TodoForm;
