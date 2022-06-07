import React, { useState } from 'react';
import AddItem from './AddItem';
import Item from './Item';

const List = () => {
  const [todo, setTodo] = useState([
    'laundry',
    'dishes',
    'windows',
    'mop floors',
  ]);
  const [done, setDone] = useState(['download todo app']);

  const addItem = (item) => {
    setTodo((prev) => [...prev, item]);
  };

  const checked = (item, fromList) => {
    if (fromList === 'todo') {
      setDone((prev) => [item, ...prev]);
      let newTodo = todo.filter((todo) => {
        return todo !== item;
      });
      setTodo(newTodo);
    } else {
      setTodo((prev) => [item, ...prev]);
      let newDone = done.filter((done) => {
        return done !== item;
      });
      setDone(newDone);
    }
  };

  const deleteItem = (item, fromList) => {
    if (fromList === 'todo') {
      let newTodo = todo.filter((todo) => {
        return todo !== item;
      });
      setTodo(newTodo);
    } else {
      let newDone = done.filter((done) => {
        return done !== item;
      });
      setDone(newDone);
    }
  };

  return (
    <div>
      <AddItem addItem={addItem} />

      <h3>To-do</h3>
      <ul>
        {todo.map((item, i) => {
          return (
            <Item
              key={i}
              item={item}
              checked={checked}
              delete={deleteItem}
              fromList='todo'
            />
          );
        })}
      </ul>
      <h3>Done</h3>
      <ul>
        {done.map((item, i) => {
          return (
            <Item
              key={i}
              item={item}
              checked={checked}
              delete={deleteItem}
              fromList='done'
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
