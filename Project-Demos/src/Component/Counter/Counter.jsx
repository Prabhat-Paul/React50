import React, { useState } from 'react'
import "./CounterStyle.css"

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClickPlus = () => {
    setCount(count + 1)
  }
  const handleClickMinus = () => {
    setCount(count - 1)
  }
  return (
    <div className='container'>
      <div>
        <h1 className='number'>{count}</h1>
      </div>
      <div className="btns-container">
        <button onClick={handleClickPlus} className="increment">+</button>
        <button onClick={handleClickMinus} className="increment">-</button>
      </div>
    </div>
  )
}

export default Counter