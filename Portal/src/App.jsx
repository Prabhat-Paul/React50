import React, { useEffect, useState } from 'react'
import CopyInput from './Compo/CopyInput'
import Switcher from './Compo/Switcher'
import BasicEffect from './Compo/BasicEffect'
import CounterEffect from './Compo/CounterEffect'
import FetchDataEffect from './Compo/FetchDataEffect'

const App = () => {
  const [data,setData] =useState([])
  useEffect(()=>{
    async function getData(){
     try {
       const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await res.json();
      if(data && data.length>0){
        setData(data)
      }
     } catch (error) {
       console.log("error",error)
     }
    }

    getData()
  },[data])
  return (
    <div>
      {/* <CopyInput /> */}
      {/* <Switcher /> */}
      {/* <ul>
      {
        data.map((todo)=>(
          <section key={todo.id}>
            <li>{todo.title}</li>
            <p>BODY :{todo.body}</p>
          </section>
        ))}
      </ul> */}
      <BasicEffect />
      <CounterEffect />

      <FetchDataEffect />
    </div>
  )
}

export default App