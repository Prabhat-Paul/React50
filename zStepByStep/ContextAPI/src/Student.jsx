import React, { useContext } from 'react'
import { StudentContext } from './ContextData'
import Subject from './Subject'

const Student = () => {
  const studentName=useContext(StudentContext)
  return (
    <div style={{backgroundColor:"lightpink", padding:'10px'}}>
      <h1>Student:{studentName}</h1>
      <Subject/>
    </div>
  )
}

export default Student