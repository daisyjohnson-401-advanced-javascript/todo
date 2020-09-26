import React from 'react';
import Toast from 'react-bootstrap/Toast';
import Badge from 'react-bootstrap/Badge';

const TodoList = (props) => {


  const styles = {
    pill: {
      marginRight: '1rem',
      cursor: 'pointer',
    },
    difficulty: {
      display: 'block',
      textAlign: 'right',
    },
    toast:{
      maxWidth:'100%',
      width: '100%',
    },
  };
    return (
      <>
        {props.list.map(item => (
        <Toast key={item._id} style={styles.toast} onClose={() => props.handleDelete(item._id)}>
        <Toast.Header closeButton>
          <Badge pill
            style={styles.pill}
            variant={item.complete ? 'danger' : 'success'}
            onClick={() => props.handleComplete(item._id)}
          >
            {item.complete ? 'Complete' : 'Pending'}
          </Badge>
          <strong className="mr-auto">{item.assignee}</strong>
        </Toast.Header>
        <Toast.Body >
          {item.text}
          <small style={styles.difficulty}>Difficulty: {item.difficulty}</small>
        </Toast.Body>
      </Toast>
        ))}
      </>
    );
  }

export default TodoList;
