import React from 'react'
import { useState } from 'react'
import "./HiddenSearchBar.css"
import {FaSearch} from 'react-icons/fa'

const HiddenSearchBar = () => {

  const[showInput,setShowInput]=useState(false)
  const [bgColor,setBgColor]=useState('white')

  const handleCLick = (e)=>{
    setBgColor("#1a1a1a")

    if(e.target.className==="container"){
      setShowInput(false)
      setBgColor('#fff')
    }
  }

  return (
    <section 
      className="container"
      style={{backgroundColor:bgColor}}
      onClick={handleCLick} 
    >
      {showInput? (
        <input placeholder='Type here'/>
      ):(
        <FaSearch onClick={()=>setShowInput(true)}/>
      )}
    </section>
  )
}

export default HiddenSearchBar
