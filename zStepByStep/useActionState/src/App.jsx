import React, { useActionState, useEffect, useState } from 'react'


const App = () => {

  const handleSubmit=async(prevdata,formData)=>{
    let name = formData.get('name')
    let password= formData.get('password')

    await new Promise(res=>setTimeout(res,2000))
    // console.log('handleSubmit is called',name,password)
    if(name && password){
      return {message: ' Form Submitted',name,password}
    } else {
      return {error: "Data is not Filled",name,password}
    }
  }

  const [data,action,pending ]=useActionState(handleSubmit,undefined)

  const [uiMessage,setUiMessage]=useState(null)
  
  useEffect(()=>{
    if(data?.message||data?.error){
      setUiMessage(data.message|| data.error)
    }
    const timer=setTimeout(() => {
      setUiMessage(null)
    }, 4000);
    
    return ()=> clearTimeout(timer)
  },[data])
 
  return (
    <div>
      <h1>useActionState Hook</h1>
      <form action={action}>
        <input defaultValue={data?.name} type="text" placeholder='Enter Name' name='name' />
        <br/>
        <br/>
        <input type="password" placeholder='Enter Pass' name="password"  />
        <br/>
        <br/>
        <button disabled={pending}>Submit</button>
        <br/>
        <br/>
        {uiMessage && (
          <span style={{color:data?.error?'red':'green'}}>{uiMessage}</span>
        )}
      </form>
      <h1>Name: {data?.name}</h1>
      <h1>PassWord: {data?.password}</h1>
    </div>
  )
}

export default App