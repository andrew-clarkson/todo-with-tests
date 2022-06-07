import React from 'react';
import AddItem from './AddItem';
import Item from './Item';

const List = (props) => {
  const addItem = (item, listID) => {
    props.add(item, listID);
  };

  const checkItem = (item, ID, type) => {
    props.check(item, ID, type);
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

  const editItem = (originalItem, editedItem, ID, type) => {
    props.edit(originalItem, editedItem, ID, type);
  };

  return (
    <div>
      <h3>{props.data.nameOfList}</h3>

      <AddItem addItem={addItem} listID={props.data.id} />
      <h3>To-do</h3>
      <ul>
        {props.data.items.todo.map((item, i) => {
          return (
            <Item
              key={i}
              item={item}
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
      <ul>
        {props.data.items.done.map((item, i) => {
          return (
            <Item
              key={i}
              item={item}
              check={checkItem}
              delete={deleteItem}
              edit={editItem}
              listID={props.data.id}
              listType='done'
            />
          );
        })}
      </ul>
      <button onClick={deleteList}>Delete List</button>
      <button onClick={deleteCompleted}>Delete All Completed</button>
    </div>
  );
};

export default List;
