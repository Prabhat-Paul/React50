import { useState } from "react"

const ComponentOne = () => {
  const [count,setCount] = useState(0)
  return (
    <div>
      <h1>Count for Componenet 1:{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default ComponentOne