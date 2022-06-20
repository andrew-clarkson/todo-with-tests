import React from 'react';
import AddItem from './AddItem';
import Item from './Item';
import '../App.css';

const List = (props) => {
  const addItem = (item, listID) => {
    props.add(item, listID);
  };

  const checkItem = (item, itemID, listID, type) => {
    props.check(item, itemID, listID, type);
  };

  const deleteItem = (item, ID, type) => {
    props.delete(item, ID, type);
  };

  const deleteList = () => {
    props.deleteList(props.data.id);
  };

  const deleteCompleted = () => {
    props.deleteCompleted(props.data.id);
  };

  const editItem = (itemID, editedItem, ID, type) => {
    props.edit(itemID, editedItem, ID, type);
  };

  return (
    <div className='list'>
      {/* <h2>{props.data.nameOfList}</h2> */}

      <AddItem addItem={addItem} listID={props.data.id} />
      <h3>To-do</h3>
      <ul className='todolist'>
        {props.data.items.todo.map((item, i) => {
          return (
            <Item
              key={item.id + i}
              item={item.name}
              itemID={item.id}
              check={checkItem}
              delete={deleteItem}
              edit={editItem}
              listID={props.data.id}
              listType='todo'
            />
          );
        })}
      </ul>
      <h3>Done</h3>
      <ul className='donelist'>
        {props.data.items.done.map((item, i) => {
          return (
            <Item
              key={item.id + i}
              item={item.name}
              itemID={item.id}
              check={checkItem}
              delete={deleteItem}
              edit={editItem}
              listID={props.data.id}
              listType='done'
            />
          );
        })}
      </ul>
      <div className='center-div delete-group'>
        <button className='delete-list' onClick={deleteList}>
          Delete List
        </button>
        <button className='delete-list' onClick={deleteCompleted}>
          Delete Completed
        </button>
      </div>
    </div>
  );
};

export default List;
