import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

const TodoList = (props) => {

    return (
      <>
      <Card>
      <ListGroup >
        {props.list.map(item => (
          <ListGroup.Item as="li" variant="success"
            className={`complete-${item.complete.toString()}`}
            key={item._id} onClick={() => props.handleComplete(item._id)}>
              {item.text}
          </ListGroup.Item>
        ))}
      </ListGroup>
      </Card>
      </>
    );
  }

export default TodoList;
