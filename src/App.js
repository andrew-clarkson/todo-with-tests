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

const emptyList = {
  nameOfList: 'New List',
  id: 1,
  items: {
    todo: ['add item to begin'],
    done: ['download todo app'],
  },
};

function App() {
  const [lists, setLists] = useState(starterList);

  const addList = () => {
    setLists((prev) => {
      return [...prev, emptyList];
    });
  };

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

  const deleteList = (id) => {
    setLists(
      [...lists].filter((list) => {
        return list.id !== id;
      })
    );
  };

  const deleteCompleted = (id) => {
    setLists(
      lists.map((list) => {
        if (list.id === id) {
          let listCopy = { ...list };
          listCopy.items.done = [];
          return listCopy;
        } else return list;
      })
    );
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

  const editItem = (originalItem, editedItem, listID, type) => {
    setLists(
      lists.map((list) => {
        if (list.id === listID) {
          let newList = { ...list };
          if (type === 'todo') {
            let index = newList.items.todo.findIndex((i) => {
              return i === originalItem;
            });
            newList.items.todo[index] = editedItem;
            return newList;
          } else {
            let index = newList.items.done.findIndex((i) => {
              return i === originalItem;
            });
            newList.items.done[index] = editedItem;
            return newList;
          }
        } else return list;
      })
    );
  };

  return (
    <div className='App'>
      <button onClick={addList}>Add New List</button>
      {lists.map((list, i) => {
        return (
          <List
            key={i}
            data={list}
            add={addItem}
            delete={deleteItem}
            deleteList={deleteList}
            deleteCompleted={deleteCompleted}
            edit={editItem}
            check={checkItem}
          ></List>
        );
      })}
    </div>
  );
}

export default App;
