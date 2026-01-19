// import { useReducer } from "react";
// import React from 'react'

// const initialState = { count: 0 }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return {...state, count: state.count + 1 };
//     case "decrement":
//       return {...state, count: state.count - 1 };
//     case "reset":
//       return {...state,count: 0 };
//     default: 
//       return state;
//   }
// }

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   return (
//     <div>
//       <h1>Count: {state.count}</h1>
      
//       <button onClick={() => 
//         dispatch({ type: "increment" })}>Increment</button>

//       <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </div>
//   )
// }

// export default App [This for understand  the useReducer]
import React from 'react'
import Counter from './Component/Counter'
import Timer from './Component/Timer'

const App = () => {
  return (
    <div>
      <Counter />
      <Timer />
    </div>
  )
}

export default App