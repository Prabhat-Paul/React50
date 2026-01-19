import { useState } from "react"
import { useEffect } from "react";

const ExampleTwo = () => {
  const [name,setName] = useState(()=>{
    const savedNames= localStorage.getItem("name");
    return savedNames ? JSON.parse(savedNames): "";
  })
  useEffect(()=>{
    localStorage.setItem("name",JSON.stringify(name));
  },[name])
  return (
    <div>
      <h1>Names: {name}</h1>
      
      <input type="text" value={name} onChange={(event)=>setName(event.target.value)}  placeholder="Enter your name" ></input>

      <button onClick={()=>setName("")}>Clear</button>
    </div>
  )
}

export default ExampleTwo