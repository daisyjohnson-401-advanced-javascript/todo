import React, { useState, useContext } from 'react';

import { Context } from '../../context/settings'
import Toast from 'react-bootstrap/Toast';
import Badge from 'react-bootstrap/Badge';
import Pagination from 'react-bootstrap/Pagination';

/* Only display the first n items in the list, where n is the number to display per screen in your context.
If you have more than n items in the list, add a button labeled Next that will replace the list with the next n items in the list.
If you are past the first n items (i.e. on page 2 or higher), add a button labeled Previous that will replace the list with the previous n items in the list.*/

const TodoList = (props) => {

  const settingsContext = useContext(Context);

  const [currentPage, setPage] = useState(0);

  // LETS PAGINATE!!!
  // the list is all of our items filtered into an array. And the complete status is shown to later display or hide them based on completed status
  const list = props.list.filter( item => settingsContext.showCompleted ? true : !item.complete );

  // Start of the list is the max number visible multiplied by the page number we are currently on. so if max visible is 4, and we are on page 0 (or the first page), we will start at index 0. If we are on page 1 (the second page), we will start at index 5;
  const startList = settingsContext.numberVisible * currentPage || 0;
  // The end of the list is our starting index + our maximum visible items or just the length of the list if it is less than our max visible. 
  const endList = startList + settingsContext.numberVisible || list.length;
  // Our total pages will be the length of our item list divided by the maximum visble allowed.
  const totalPages = new Array(Math.ceil(list.length / settingsContext.numberVisible)).fill('');
  // then we want to display the correct list items, if the list length is longer than the maximum visible we will slice our start to end indexes out of our list item array.
  const displayList = list ? list.slice(startList, endList) : []; 

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
        {
        displayList.map(item =>
        <Toast 
        key={item._id} 
        style={styles.toast} 
        onClose={() => props.handleDelete(item._id)}>
        <Toast.Header closeButton>
          <Badge pill
            style={styles.pill}
            variant={item.complete ? 'danger' : 'success'}
            onClick={() => props.handleComplete(item._id)}>
            {item.complete ? 'Complete' : 'Pending'}
          </Badge>
          <strong className="mr-auto">{item.assignee}</strong>
        </Toast.Header>
        <Toast.Body >
          {item.text}
          <small style={styles.difficulty}>
            Difficulty: {item.difficulty}
            </small>
        </Toast.Body>
      </Toast>
        )}

        <Pagination>
        {
          totalPages.map( (n,i) =>
            <Pagination.Item key={i+1} active={i === currentPage} onClick={() => setPage(i)}>
              {i+1}
            </Pagination.Item>,
          )
        }
      </Pagination>
      </>
    );
  };

export default TodoList;
