import { useReducer,useState } from "react";
import { counterReducer,initialState } from "../counterReducer";
import React from 'react'


const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handlePlus = () => dispatch({ type: "increment" });
  const handleMinus = () => dispatch({ type: "decrement" });

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handlePlus}>Increament</button>
      <button onClick={handleMinus}>Decreament</button>
      <br />
      <br />
      <input type="number"
        placeholder="Enter the number"
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
      />
      &nbsp;
      <button onClick={()=>{
        dispatch({type:"incrementByAmount",payload:Number(inputValue)})
        setInputValue(0);
      }}>Add Amount</button>
      &nbsp;
      <button onClick={()=>{
        dispatch({type:"decrementByAmount",payload:Number(inputValue)})
        setInputValue(0);
      }}>Substract Amount</button>
    </div>
  )
}

export default Counter