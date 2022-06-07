import { useState } from 'react';
import './App.css';
import List from './components/List';

const starterList = [
  {
    nameOfList: 'List #1',
    id: 1,
    items: {
      todo: ['laundry', 'wash floors'],
      done: ['download todo app', 'sweep'],
    },
  },
  {
    nameOfList: 'List #2',
    id: 2,
    items: {
      todo: ['clean kitchen', 'garbages'],
      done: ['groceries', 'bathrooms'],
    },
  },
];

function App() {
  const [lists, setLists] = useState(starterList);

  const addItem = (item, listID) => {
    setLists(
      lists.map((list) => {
        if (list.id === listID) {
          const listCopy = { ...list };
          listCopy.items.todo.push(item);
          return listCopy;
        } else return list;
      })
    );
  };

  const deleteItem = (item, listID, listType) => {
    setLists(
      lists.map((list) => {
        if (list.id === listID) {
          const listCopy = { ...list };
          if (listType === 'todo') {
            let index = listCopy.items.todo.findIndex((i) => {
              return i === item;
            });
            listCopy.items.todo.splice(index, 1);
          } else {
            let index = listCopy.items.done.findIndex((i) => {
              return i === item;
            });
            listCopy.items.done.splice(index, 1);
          }
          return listCopy;
        } else return list;
      })
    );
  };

  const deleteAll = (id) => {
    let newLists = [...lists].filter((list) => {
      return list.id !== id;
    });
    setLists(newLists);
  };

  const checkItem = (item, listID, listType) => {
    setLists(
      lists.map((list) => {
        if (list.id === listID) {
          const listCopy = { ...list };
          if (listType === 'todo') {
            let index = listCopy.items.todo.findIndex((i) => {
              return i === item;
            });
            listCopy.items.todo.splice(index, 1);
            listCopy.items.done.push(item);
          } else {
            let index = listCopy.items.done.findIndex((i) => {
              return i === item;
            });
            listCopy.items.done.splice(index, 1);
            listCopy.items.todo.push(item);
          }
          return listCopy;
        } else return list;
      })
    );
  };

  return (
    <div className='App'>
      {lists.map((list) => {
        return (
          <List
            data={list}
            add={addItem}
            delete={deleteItem}
            deleteAll={deleteAll}
            check={checkItem}
          ></List>
        );
      })}
    </div>
  );
}

export default App;
