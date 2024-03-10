 
import React, { useState } from 'react'; 
 
const CRUD = () => { 
  const [items, setItems] = useState([]); // State to store items 
 
  const [inputValue, setInputValue] = useState(''); // State to manage input value 
 
  // Function to handle adding an item 
  const addItem = () => { 
    if (inputValue.trim() !== '') { 
      setItems([...items, inputValue]); 
      setInputValue(''); // Clear input field after adding item 
    } 
  }; 
 
  // Function to handle updating an item 
  const updateItem = (index, newValue) => { 
    const updatedItems = [...items]; 
    updatedItems[index] = newValue; 
    setItems(updatedItems); 
  }; 
 
  // Function to handle deleting an item 
  const deleteItem = (index) => { 
    const filteredItems = items.filter((_, i) => i !== index); 
    setItems(filteredItems); 
  }; 
 
  return ( 
    <div> 
      <h1>Appointment details</h1> 
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      /> 
      <button onClick={addItem}>Add</button> 
      <ul> 
        {items.map((item, index) => ( 
          <li key={index}> 
            <input 
              type="text" 
              value={item} 
              onChange={(e) => updateItem(index, e.target.value)} 
            /> 
            <button onClick={() => deleteItem(index)}>Delete</button> 
          </li> 
        ))} 
      </ul> 
    </div> 
  ); 
}; 
 
export default CRUD;