import React, { useContext, useState } from 'react'
import College from './College'
import { StudentContext, SubjectContext } from './ContextData'


const App = () => {
  const [sub,setSub]=useState('')
  const [newName,setNewName]=useState('')
  return (
    <div style={{backgroundColor:"orange", padding:'10px'}}>
      <SubjectContext.Provider value={sub}>
        <StudentContext.Provider value={newName}>
          <select style={{width:'150px',height:'2rem'}} onChange={(e)=>{setSub(e.target.value)}}>
            <option value=''>Select Subject</option>
            <option value='Math'>Math</option>
            <option value='OS'>OS</option>
            <option value='History'>History</option>
            <option value='Physics'>Physics</option>
            </select>
            &nbsp;
            <button 
              onClick={()=>setSub('')}
              style={{width:'150px',height:'2rem'}}
            >Clear Select</button>
            &nbsp;
            <input
              style={{backgroundColor:"orange", padding:'7px', border:'1px solid blue' }}
              value={newName}
              onChange={(e)=>setNewName(e.target.value)}
              placeholder='Enter New Name'
            />

            <button
              style={{backgroundColor:"orange", padding:'7px', border:'1px solid blue' }}
              onClick={()=>setNewName('')}>
              Clear Name
            </button>

            <h1>Context API</h1>
            <College/>
        </StudentContext.Provider>
      </SubjectContext.Provider>
    </div>
  )
}

export default App