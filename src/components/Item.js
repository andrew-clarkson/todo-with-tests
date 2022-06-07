import React from 'react';

const Item = (props) => {
  const checkHandler = (event) => {
    event.preventDefault();
    props.check(props.item, props.listID, props.listType);
  };
  const deleteItem = (event) => {
    event.preventDefault();
    props.delete(props.item, props.listID, props.listType);
  };
  return (
    <li>
      <button type='button' onClick={checkHandler}>
        {props.listType === 'todo' ? 'Done' : 'Not Done'}
      </button>
      {props.item}
      <button onClick={deleteItem}>Delete</button>
    </li>
  );
};

export default Item;
