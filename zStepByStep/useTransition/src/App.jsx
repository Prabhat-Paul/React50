import React from 'react'
import { useTransition } from 'react'
import { useState } from 'react'

const App = () => {
  // -------------Using state-------
  // const[pending,setPending] = useState(false)
  // const handleClick = async ()=>{
  //   setPending(true)
  //   await new Promise(res=>setTimeout(res,2000))
  //   setPending(false)
  // }
  const [pending,startTransition]=useTransition();

  const handleClick= ()=>{
    startTransition(async()=>{
      await new Promise(res=>setTimeout(res,2000))
    })
  }
  return (
    <div>
      <h1>useTransion-Hook</h1>
      {
        pending? <img src="https://assets-v2.lottiefiles.com/a/c57991b2-2ad0-11ee-84bf-57da552a2b2b/aZqwWh5oeU.gif" alt=""
        style={{width:'100px'}} />:null
      }
      <button disabled={pending} onClick={handleClick}>{pending?"Clicking":"Click"}</button>
    </div>
  )
}

export default App