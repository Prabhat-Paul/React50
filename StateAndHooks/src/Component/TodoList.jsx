import React, { useEffect, useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState(()=>{
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [inputValue, setInputValue] = useState('');

 

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim() !== ""){
      setTodos([...todos, inputValue]);
    }
    setInputValue("");
  }

  return (
    <div>
      <h1>Todo List</h1>  
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputValue} placeholder='Add a new Todo' onChange={handleChange}/>
        <button type='submit'>Add Todo</button>
        <button type='button' onClick={()=> setTodos([])}>Clear Todos</button>
      </form>
      <ul>
        {
          todos.map((todo,index)=>(
            <li key={index}>{todo}</li>
          ))
        }
      </ul>
   
    </div>
    
  )
}

export default TodoList