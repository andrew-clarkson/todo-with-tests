import React, { useState, useRef } from 'react';
import '../App.css';

const Item = (props) => {
  const [editable, setEditable] = useState(false);
  const inputRef = useRef(props.item);

  const checkHandler = (event) => {
    event.preventDefault();
    props.check(props.item, props.itemID, props.listID, props.listType);
  };
  const deleteHandler = (event) => {
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
      props.itemID,
      inputRef.current.value,
      props.listID,
      props.listType
    );
  };

  return (
    <li>
      {!editable && (
        <button
          data-cy='doneButton'
          className='change'
          type='button'
          onClick={checkHandler}
        >
          {props.listType === 'todo' ? (
            <i class='fa-solid fa-check fa-2xl'></i>
          ) : (
            <i class='fa-solid fa-rotate-left fa-xl'></i>
          )}
        </button>
      )}

      <div className='list-item'>
        {editable ? (
          <input type='text' ref={inputRef} defaultValue={props.item} />
        ) : (
          props.item
        )}
      </div>

      {editable && (
        <button className='change' onClick={sendEdit}>
          ✔️
        </button>
      )}

      {!editable && (
        <div className='changegroup'>
          <button className='change' onClick={editHandler}>
            <i class='fa-solid fa-pen fa-xl'></i>
          </button>
          <button
            className='change'
            data-cy='deleteButton'
            onClick={deleteHandler}
          >
            <i class='fa-solid fa-trash-can fa-xl'></i>
          </button>
        </div>
      )}
    </li>
  );
};

export default Item;
