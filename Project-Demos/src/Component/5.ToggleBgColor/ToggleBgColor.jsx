import React from 'react'
import { useState } from 'react'
import "./ToggleStyle.css"

const ToggleBgColor = () => {
  const [bgColor,setBgColor]= useState("white")
  const [textColor,setTextColor] = useState("#1b1b1b")
  const [buttonColor,setButtonColor] = useState('white')

  const handleClick = ()=>{

    setBgColor(bgColor==="white"?"#1b1b1b":"white")

    setTextColor(textColor==="#1b1b1b"?"#ffa31a":"#1b1b1b")

    setButtonColor(buttonColor==="white"?"#1b1b1b": "white")

  }

  return (
    <div style={{backgroundColor:bgColor,color:textColor}}>
      <button 
        onClick={handleClick} 
        style={{
          backgroundColor:buttonColor,
          color:textColor,
          border:`2px solid ${textColor}`
        }}
      >
        {bgColor=="white"? "Change To Black theme":"Change To White Theme"}
      </button>
      <section className="content">
        <h1>
          Welcome To A <br/> Real World...
        </h1>
      </section>

    </div>
  )
}

export default ToggleBgColor