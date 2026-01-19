import React from 'react'
import { useRef,useState,useEffect } from 'react'

const Timer = () => {
  const [timer,setTimer] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(()=>{
      setTimer((prevTimer) => prevTimer + 1);
    },1000)

    return () => {
      clearInterval(intervalRef.current);
    }

  }, []);
  return (
    <div>
      <h1>Timer: {timer}</h1>
      <button onClick={()=>clearInterval(intervalRef.current)}>Stop Timer</button>
      &nbsp;
      <button onClick={()=>{
        clearInterval(intervalRef.current);
        setTimer(0);
      }}>Reset Timer</button>
      &nbsp;
      <button onClick={()=>{
        intervalRef.current = setInterval(()=>{
          setTimer((prevTimer) => prevTimer + 1);
        },1000)}}>Start Timer</button>
    </div>
  )
}

export default Timer