import React, { useEffect } from 'react';

import './todo.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import TodoForm from './form.js';
import TodoList from './list.js';
import axios from 'axios';
import useAjax from '../../hooks/useAjax';

const url = 'https://api-js401.herokuapp.com/api/v1/todo'
function ToDo(props) {
 
  const { list, setList } = useAjax(url);

 
  const addItem = async item => {
    console.log('added item');
      item._id = Math.random();
      item.complete = false;
      setList([...list, item]);

      const request = {
        id: item._id,
        text: item.text,
        asignee: item.asignee,
        difficulty: item.difficuly,
        complete: item.complete,
      };
     await axios.post(url, request); 
  };

  const toggleComplete = async id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      const request = {
        id: item._id,
        complete: item.complete,
      }
      await axios.put(`${url}/${id}`, request);

      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
  }
};

  const deleteItem = async id => {
    await axios.delete(`${url}/${id}`);
  };
  

  // //use a useEffect to preload the seeded todo Items
  useEffect(() => {
    let todoList = list.filter(item => !item.complete).length;
    document.title = `To Do List: ${todoList}`;
  }, [list]);



  return (
    <>
      <header>
        <Navbar bg="primary" variant="dark" >
          <Navbar.Toggle
          aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
          id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>


      <Container>
        <Row style={{margin:'1rem 0'}}>
          <Col>
                <Navbar bg="dark" variant="dark" >
                    <Navbar.Brand href='#home'>
                      To Do List Manager (
                        {list.filter(item => !item.complete).length})
              </Navbar.Brand>
                </Navbar>
          </Col>
        </Row>

        <Row>
          <Col md="auto" style={{margin:'1rem'}}>

              <TodoForm handleSubmit={addItem} />

          </Col>

          <Col md="auto" style={{margin:'1rem'}}>

              <TodoList
                list={list}
                handleComplete={toggleComplete}
                handleDelete={deleteItem}
              />

          </Col>
        </Row>
      </Container>
    </>
  );
}


export default ToDo;
