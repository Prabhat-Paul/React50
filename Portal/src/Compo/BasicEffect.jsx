import React, { useEffect } from 'react'

const BasicEffect = () => {
  useEffect(()=>{
    console.log("Basic Effect Mounted")
    return ()=>{
      console.log("Basic Effect Unmounted")
    }
  },[])
  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect