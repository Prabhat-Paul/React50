import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    // document.title = `Count: ${count} times`
    console.log(`Count has been updated to: ${count}`)
  },[count])
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default CounterEffect