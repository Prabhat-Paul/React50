import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    async function getData(){
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data= await response.json();
      if (data && data.length>0){
        setData(data)
      }
    }
    getData();
  },[data])
  return (
    <div>
      <h1>First post title:</h1>
      
      {data.length>0? <h2>Title:{data[0].title}</h2>:<h2>Loading...</h2>}
        {/* {
          data.map((item,index)=>(
            <section key={index}>

              {item.id===1 && <p>Title: {item.title}</p>}
            </section>
          ))
        }
         */}
     
    </div>
  )
}

export default FetchDataEffect