import React, { useActionState } from 'react'

const App = () => {

  const handleLogin = (prevData,formData)=>{
    const name = formData.get('name')
    const email = formData.get('email')
    const regex = /^[A-Z0-9]+@/i;

    if(!name || name.length<2){
      return {error:'Name not valid or have at least 2 characters',name,email}
    } else if(!regex.test(email)){
      return {error:'Email is not valid',name,email}
    } else {
      return {message:'Login successful',name,email}
    }

  }

  const [data,action,pending]= useActionState(handleLogin)
  // console.log(data)
  return (
    <div>
      <h1>Validation with UseActionHook</h1>
      <form action={action}>
        <input defaultValue={data?.name} type="text" name='name' placeholder="Enter your name" />
        <br></br>
        <br></br>
        <input  name='email' placeholder="Enter your email" />
        <br></br>
        <br></br>
        <button disabled={pending}>Login</button>
        {data?.error && <p style={{color:'red'}}>{data.error}</p>}
        {data?.message && <p style={{color:'green'}}>{data.message}</p>}
      </form>

    </div>
  )
}

export default App