import React from 'react'
import './Form.css'
import { useState } from 'react'

const Form = () => {
  const[userName,setUserName]=useState('')
  const[email,setEmail]=useState('')
  const[pass,setPass]=useState('')
  const[confirmPass,setConfirmPass]=useState('')

  const[errorUserName,setErrorUserName]=useState('')
  const[errorEmail,setErrorEmail] = useState('')
  const[errorPass,setErrorPass] = useState('')
  const[errorConfirmPass,setErrorConfirmPass]= useState("")

  const [userColor,setUsercolor]= useState('')
  const [emailColor,setEmailColor]= useState('')
  const [passColor,setPassColor] = useState('')
  const [confirmPassColor,setConfirmPassColor] = useState('')

  const validate = (e)=>{
    e.preventDefault()

    if(userName.length>=8){
      setErrorUserName('')
      setUsercolor("green")
    } else {
      setErrorUserName('Username must have 8 letters')
      setUsercolor('red')
    }

    if(email.includes('@gmail')){
      setErrorEmail('')
      setEmailColor('green')
    } else {
      setErrorEmail('Email is not valid')
      setEmailColor('red')
    }

    if(pass.length>=8){
      setErrorPass('')
      setPassColor('green')
    } else{
      setErrorPass('Password must have 8 letters')
      setPassColor('red')
    }

    if(pass !='' && pass===confirmPass){
      setErrorConfirmPass('')
      setConfirmPassColor('green')
    } else{
      setErrorConfirmPass('Re-enter or Check your password again')
      setConfirmPassColor('red')
    }
    
    setTimeout(()=>{
      setUserName('')
      setErrorUserName('')
      setEmail('')
      setErrorEmail('')
      setPass('')
      setErrorPass('')
      setConfirmPass('')
      setErrorConfirmPass('')
    },5000)

  }
  

  return <>
    <div className="card">
      <div className="card-image"></div>
      <form>
        <input 
          type='text' 
          placeholder='Name' 
          style={{borderColor:userColor}} 
          value={userName} 
          onChange={(e)=>setUserName(e.target.value)}
        />

        <p className="error">{errorUserName}</p>

        <input 
          type='email' 
          placeholder='Email' 
          style={{borderColor:emailColor}} 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}
        />

        <p className="error">{errorEmail}</p>

        <input 
          type='password' 
          placeholder='Password' 
          style={{borderColor:passColor}} 
          value={pass} 
          onChange={(e)=>setPass(e.target.value)}
        />

        <p className="error">{errorPass}</p>

        <input 
          type='password' 
          placeholder='Confirm Password' 
          style={{borderColor:confirmPassColor}} 
          value={confirmPass} 
          onChange={(e)=>setConfirmPass(e.target.value)}
        />

        <p className="error">{errorConfirmPass}</p>

        <button className="submit-btn" onClick={validate}>Submit</button>


      </form>
    </div>

  </>
}

export default Form