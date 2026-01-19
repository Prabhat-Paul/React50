import React, { useState } from 'react'
import PopupContent from './PopupContent'

const CopyInput = () => {
  const[copied,setCopied]=useState(false)
  const[inputValue,setInputValue]=useState("")
  const handleCopy=()=>{
    navigator.clipboard.writeText(inputValue).then(()=>{
      setCopied(true)
      setTimeout(()=>setCopied(false),2000)
      
    })
    
  }
  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
      />
      <button onClick={handleCopy}>{copied?"Copied":"Copy"}</button>

      <PopupContent copied={copied}/>

    </div>
  )
}

export default CopyInput