import React, { useRef } from 'react';
import '../App.css';

const AddItem = (props) => {
  const inputRef = useRef();

  const newItem = (event) => {
    event.preventDefault();
    const item = inputRef.current.value;
    if (item.length > 2) {
      props.addItem(item, props.listID);
      inputRef.current.value = '';
    } else alert('Please make new todo item longer than 2 characters.');
  };

  return (
    <div className='center-div'>
      <form onSubmit={newItem}>
        <input data-cy='input' type='text' ref={inputRef} />
        <button className='' data-cy='add'>
          <i class='fa-solid fa-plus fa-2xl'></i>
        </button>
      </form>
    </div>
  );
};

export default AddItem;
