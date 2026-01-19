import React from 'react'

const ComponentTwo = ({count,onClickHandler}) => {
  const handleClick = ()=> onClickHandler();
  return (
    <div>
      <h1>Count for Componenet 2:{count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default ComponentTwo