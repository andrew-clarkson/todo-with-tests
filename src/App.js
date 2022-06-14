import { useState, useEffect } from 'react';
import starterList from './starterList';
import './App.css';
import List from './components/List';

function App() {
  const [lists, setLists] = useState(starterList);

  // fetch local stoarge data if it exists
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('lists'));
    if (!data) {
      setLists(starterList);
    } else {
      setLists(data);
    }
  }, []);

  // store list data on every change
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  const addList = () => {
    let newList = {
      nameOfList: 'New List',
      id: new Date(),
      items: {
        todo: [{ name: 'add item to start', id: new Date() }],
        done: [{ name: 'completed items will show here', id: new Date() - 1 }],
      },
    };
    setLists((prev) => {
      return [...prev, newList];
    });
  };

  const addItem = (item, listID) => {
    setLists(
      lists.map((list) => {
        if (list.id === listID) {
          const listCopy = { ...list };
          listCopy.items.todo.push({ name: item, id: new Date() });
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

  const checkItem = (item, itemID, listID, listType) => {
    setLists(
      lists.map((list) => {
        if (list.id === listID) {
          const listCopy = { ...list };
          if (listType === 'todo') {
            let index = listCopy.items.todo.findIndex((i) => {
              return i.id === itemID;
            });
            listCopy.items.todo.splice(index, 1);
            listCopy.items.done.push({ name: item, id: itemID });
          } else {
            let index = listCopy.items.done.findIndex((i) => {
              return i.id === itemID;
            });
            listCopy.items.done.splice(index, 1);
            listCopy.items.todo.push({ name: item, id: itemID });
          }
          return listCopy;
        } else return list;
      })
    );
  };

  const editItem = (itemID, editedItem, listID, type) => {
    setLists(
      lists.map((list) => {
        if (list.id === listID) {
          let newList = { ...list };
          if (type === 'todo') {
            let index = newList.items.todo.findIndex((i) => {
              return i.id === itemID;
            });
            newList.items.todo[index].name = editedItem;
            return newList;
          } else {
            let index = newList.items.done.findIndex((i) => {
              return i.id === itemID;
            });
            newList.items.done[index].name = editedItem;
            return newList;
          }
        } else return list;
      })
    );
  };

  return (
    <>
      <h1>Don't Forget!</h1>
      <div className='center-div'>
        <button className='add-list' onClick={addList}>
          Add New List
        </button>
      </div>

      <div id='lists'>
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
    </>
  );
}

export default App;
