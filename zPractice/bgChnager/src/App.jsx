import { useState } from "react"

const App = () => {
  return (
    <div >
      <BgChnager />
    </div>
  )
}

export default App

const BgChnager = () => {
  const [color,setColor] = useState("lightBlue")
  
  return (
    <div style={{display:"flex",justifyContent:"center",
    backgroundColor:color,height:"100vh"}} >
      
      <div 
      style={{alignSelf:"center",textAlign:"center",
      backgroundColor:"white",width:"450px",height:"65px",
      borderRadius:"20px",boxShadow:"0px 0px 10px gray"}}>

        <button 
          style={{width:"80px",height:"45px",borderRadius:"20px",marginTop:"10px",marginLeft:"10px",marginBottom:"10px",backgroundColor:"pink",fontWeight:"bold",
        color:"white",border:"none"}}
          onClick={()=>setColor("pink")}
        >
          Pink
        </button>

        <button 
          style={{width:"80px",height:"45px",borderRadius:"20px",marginTop:"10px",marginLeft:"10px",backgroundColor:"black",fontWeight:"bold",color:"white",border:"none"}}
          onClick={()=>setColor("black")}
        >
          Black
        </button>

        <button 
          style={{width:"80px",height:"45px",borderRadius:"20px",marginTop:"10px",marginLeft:"10px",backgroundColor:"green",fontWeight:"bold",color:"white",border:"none"}}
          onClick={()=>setColor("green")}
        >
          Green
        </button>

        <button 
          style={{width:"80px",height:"45px",borderRadius:"20px",marginTop:"10px",marginLeft:"10px",backgroundColor:"orange",fontWeight:"bold",color:"white",border:"none"}}
          onClick={()=>setColor("orange")}
        >
          Orange
        </button>

      </div>
        
    </div>
  )
}
