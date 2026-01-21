import React, { useState } from 'react'
import "./TodoStyle.css"

const Todo = () => {
  const[todos,setTodos] =useState([])
  const[inputTodo,setInputTodo]=useState("")

  const handleSubmit=()=>{

    if(inputTodo.trim()){
      setTodos((todos)=>{
        return todos.concat({
        text: inputTodo,
        id: Math.floor(Math.random()*10)
        })
      })
    }
   
    setInputTodo("")
  }

  const removeTodo=(id)=>{
    setTodos((todos)=>todos.filter((todo)=>todo.id!==id))
  }

  return (
    <div className='container'>
      <input type='text' 
      placeholder='New todo' 
      value={inputTodo} 
      onChange={(e)=>setInputTodo(e.target.value)}
      />
      <button onClick={handleSubmit}>
        Submit
      </button>
      <ul className="todos-list">
        {todos.map(({text,id})=>(
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className='close' onClick={()=>removeTodo(id)}>Delete</button>
          </li>
          

        ))}
      </ul>

    </div>
  )
}

export default Todo