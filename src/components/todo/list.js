import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

const TodoList = (props) => {

    return (
      <>
      <Card>
      <ListGroup >
        {props.list.map(item => (
          <ListGroup.Item  action variant={item.complete ? "success" : "danger"}
            // className={`complete-${item.complete.toString()}`}
            key={item._id} >
              <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
              </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
      </Card>
      </>
    );
  }

export default TodoList;
