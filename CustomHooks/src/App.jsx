import React from 'react'
import useFetch from './useFetch';
import UniqueId from './Component/UniqueId';

const App = () => {
  const [data] =useFetch("https://jsonplaceholder.typicode.com/posts")
  return (
    <div>
      {/* {data && data.map((item)=>{
        return <p key={item.id}>Title: {item.title}</p>
      })} */}
      <UniqueId />
      
    </div>
  )
}

export default App