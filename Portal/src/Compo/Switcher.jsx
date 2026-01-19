import React, { useState } from 'react'

const Switcher = () => {
const [sw,setSw]=useState(false)

  return (
    <div>
      {sw? <span>Dark</span>: <span>Light</span>}
      <br/>

      <button onClick={()=>setSw((prev)=> !prev)}>Switch</button>
    </div>
  )
}

export default Switcher