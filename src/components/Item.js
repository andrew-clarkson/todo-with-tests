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
    props.delete(props.itemID, props.listID, props.listType);
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
          data-testid='check'
          className='change icon-button'
          type='button'
          onClick={checkHandler}
        >
          {props.listType === 'todo' ? (
            <i className='fa-solid fa-check fa-2xl'></i>
          ) : (
            <i className='fa-solid fa-rotate-left fa-xl'></i>
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
        <button
          className='change change-item-group icon-button'
          onClick={sendEdit}
          data-testid='sendEdit'
        >
          <i className='fa-solid fa-check fa-2xl fa-beat'></i>
        </button>
      )}

      {!editable && (
        <div className='change-item-group'>
          <button
            className='change icon-button'
            onClick={editHandler}
            data-testid='edit'
          >
            <i className='fa-solid fa-pen fa-xl'></i>
          </button>
          <button
            className='change icon-button'
            data-cy='deleteButton'
            onClick={deleteHandler}
            data-testid='delete'
          >
            <i className='fa-solid fa-trash-can fa-xl'></i>
          </button>
        </div>
      )}
    </li>
  );
};

export default Item;
