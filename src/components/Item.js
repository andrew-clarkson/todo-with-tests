import React from 'react';

const Item = (props) => {
  const clickHandler = (event) => {
    event.preventDefault();
    props.checked(props.item, props.fromList);
  };
  const deleteItem = (event) => {
    event.preventDefault();
    props.delete(props.item, props.fromList);
  };
  return (
    <li>
      <button type='button' onClick={clickHandler}>
        {props.fromList === 'todo' ? 'Done' : 'NotDone'}
      </button>
      {props.item}
      <button onClick={deleteItem}>Delete</button>
    </li>
  );
};

export default Item;
