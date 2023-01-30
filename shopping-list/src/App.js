import React, { useState } from 'react'
import './App.css';
import Items from './components/Items';



function App() {

  const [itemVal, setItemVal] = useState('')
  const [items, setItems] = useState([])

  function handleOnChange(e) {
    setItemVal(e.target.value);
  }

  function addItems(e) {
    console.log(e)
    if (itemVal === '') {
      alert('Please Add an Item')
    } else {
      let newItem = itemVal

      setItems([...items, newItem])
      setItemVal('')
    }


  }

  return (
    <div className="App">
      <h1>My Shopping list</h1>
      <div className="shopping-list">
        <div className="add-item">
          <input type="text" placeholder='Add an Item...' value={itemVal} onChange={handleOnChange} />
          <i className="fa-solid fa-plus " onClick={addItems} ></i>
        </div>
        {items.map((item, index) => {
          return (
            <Items value={item} key={index} />
          )
        })
        }
      </div>
      <div className="guide">
        <p>Click on the Item when Done</p>
      </div>
    </div>
  );
}

export default App;

