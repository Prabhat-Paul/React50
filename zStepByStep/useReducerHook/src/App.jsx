import React from 'react'
import { useReducer } from 'react'
const initialState = {
  name: '',
  password: '',
  email: '',
  city: '',
  address: ''
}

const reducer=(data,action)=>{
  return {...data,[action.type]:action.value}
}

const App = () => {

  const [state,dispatch]= useReducer(reducer, initialState)

  // console.log(state)

  return (
    <div>
      <h1>useReducer Hook</h1>
      <input onChange={(e)=>dispatch({value:e.target.value,type:'name'})} type='text' placeholder='Enter Name'/>
      <br/> <br/>
      <input onChange={(e)=>dispatch({value:e.target.value,type:'password'})} type='password' placeholder='Enter Password'/>
      <br/> <br/>
      <input onChange={(e)=>dispatch({value:e.target.value,type:'email'})} type='email' placeholder='Enter Email'/>
      <br/> <br/>
      <input onChange={(e)=>dispatch({value:e.target.value,type:'city'})} type='text' placeholder='Enter City'/>
      <br/> <br/>
      <input onChange={(e)=>dispatch({value:e.target.value,type:'address'})} type='text' placeholder='Enter Address'/>
      <br/> <br/>
      <button onClick={()=>console.log(state)} >Add Details</button>
    </div>
  )
}

export default App