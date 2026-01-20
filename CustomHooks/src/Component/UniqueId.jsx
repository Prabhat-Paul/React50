import React from 'react'
import { useId } from 'react'

const UniqueId = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-name`}>Name: </label>
      <input type='text' id={`${id}-name`}/>
      <br/>
      <br/>
      <label htmlFor={`${id}-email`}>Email: </label>
      <input type='text' id={`${id}-email`}/> 
    </div>
  )
}

export default UniqueId