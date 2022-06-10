import React, { useRef } from 'react';

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
    <>
      <h3>Add Item</h3>
      <form onSubmit={newItem}>
        <input data-cy='input' type='text' ref={inputRef} />
        <button data-cy='add'>Add</button>
      </form>
    </>
  );
};

export default AddItem;
