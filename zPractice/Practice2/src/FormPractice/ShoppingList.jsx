import React, { useState } from 'react'

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || quantity <= 0) return alert("Please enter valid name and quantity");
    const newItem = { name, quantity: parseInt(quantity) };
    setItems([...items, newItem]);
    setName('');
    setQuantity("");

  }
  const handleRemove = (e) => {
    e.preventDefault();
    setItems([]);

  }
  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter item Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        &nbsp;
        <input
          type='number'
          placeholder='Enter quantity'
          value={quantity}
          onChange={(e)=>setQuantity(e.target.value)}
        />
        &nbsp;
        <input type='submit' value='Add Item' />
        &nbsp;
        <button onClick={handleRemove}>Remove List</button>
      </form>
      <ul>
        {
          items.map((item,index)=>(
            <li key={index}>
              {item.name} - {item.quantity}
            </li>
          ))
        }
      </ul>

    </div>
  )
}

export default ShoppingList