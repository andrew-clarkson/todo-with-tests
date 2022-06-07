import React, { useState, useRef } from 'react';

const Item = (props) => {
  const [editable, setEditable] = useState(false);
  const inputRef = useRef(props.item);

  const checkHandler = (event) => {
    event.preventDefault();
    props.check(props.item, props.listID, props.listType);
  };
  const deleteItem = (event) => {
    event.preventDefault();
    props.delete(props.item, props.listID, props.listType);
  };

  const editHandler = (event) => {
    event.preventDefault();
    setEditable(true);
  };

  const sendEdit = (event) => {
    event.preventDefault();
    setEditable(false);
    props.edit(
      props.item,
      inputRef.current.value,
      props.listID,
      props.listType
    );
  };

  return (
    <li>
      <button type='button' onClick={checkHandler}>
        {props.listType === 'todo' ? 'Done' : 'Not Done'}
      </button>
      {editable ? (
        <input type='text' ref={inputRef} defaultValue={props.item} />
      ) : (
        props.item
      )}
      {/* {editable ? (
        <p contentEditable='true' ref={inputRef}>
          {props.item}
        </p>
      ) : (
        <p ref={inputRef}>{props.item}</p>
      )} */}

      {!editable && <button onClick={editHandler}>Edit</button>}
      {editable && <button onClick={sendEdit}>✔️</button>}
      <button onClick={deleteItem}>Delete</button>
    </li>
  );
};

export default Item;
