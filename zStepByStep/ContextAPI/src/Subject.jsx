import React, { useContext } from 'react'
import { SubjectContext } from './ContextData'

const Subject = () => {
  const subject=useContext(SubjectContext)
  return (
    <div style={{backgroundColor:"lightblue", padding:'10px'}}><h1>Subject:{subject}</h1></div>
  )
}

export default Subject