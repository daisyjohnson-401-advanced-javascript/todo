import React, { useEffect, useState } from 'react';

import './todo.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import TodoForm from './form.js';
import TodoList from './list.js';
import axios from 'axios';
import useAjax from '../../hooks/useAjax';

function ToDo() {

  // const url = 'https://api-js401.herokuapp.com/api/v1/todo'

  
  const { list, setList } = useAjax('https://api-js401.herokuapp.com/api/v1/todo');

 
  async function addItem (item){
      item.complete = false;
      const response = await axios.post('https://api-js401.herokuapp.com/api/v1/todo');
      const result = response.data;
      setList([...list, result]);
  };

  async function toggleComplete(id){

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      await axios.put(`'https://api-js401.herokuapp.com/api/v1/todo'/${id}`);
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
  }
};

  async function deleteItem (id){
    await axios.delete(`'https://api-js401.herokuapp.com/api/v1/todo'/${id}`);
    let updateList = list.filter(item => item._id !== id);
   setList(updateList);
  };
  

  // //use a useEffect to preload the seeded todo Items
  useEffect(() => {
    // let list = [
    //   { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
    //   { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
    //   { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
    //   { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
    //   { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    // ];

    // setList(list);
  }, []);



  return (
    <>
      <header>
        <Navbar expand="lg" bg="primary" variant="dark" >
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar>
      </header>


      <Container>

        <Row>

          <Col>
            
              <header>
                <Navbar bg="dark" variant="dark" >
                  <Nav className="mr-auto">
                    <Navbar.Brand>
                      To Do List Manager ({list.filter(item => !item.complete).length})
              </Navbar.Brand>
                  </Nav>
                </Navbar>
              </header>
           
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <div>
              <TodoForm handleSubmit={addItem} />
            </div>
          </Col>

          <Col md={8}>
            <div>
              <TodoList
                list={list}
                handleComplete={toggleComplete}
                handleDelete={deleteItem}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default ToDo;
