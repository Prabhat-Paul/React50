import { useState } from "react";

const ExampleOne = () => {
  const [count,setCount] = useState(()=>{
    let initialCount = 10;
    return initialCount;
  });
  return (
    <div>
      <h1>Count for Example1:{count}</h1>
      <button onClick={()=>setCount((prev)=>prev+1)}>Increament</button>
    </div>
  )
}

export default ExampleOne