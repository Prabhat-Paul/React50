// import { useState } from "react"

// const App = () => {
//   const [count,setCount]=useState(0)
//   const increase = ()=>setCount(count+1);
//   const decrease = ()=>setCount(count-1);

//   return (
//     <section>
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//       <button style={{marginLeft:"10px"}} onClick={decrease}>-</button>
//     </section>
//   )
// }

// export default App

// import { useState } from "react"

// const App = () => {
//   const [friends,setFriends] = useState(["Ali",'Moti'])

//   const addOneFriend = () => setFriends([...friends,"Paul"]);

//   const removeOneFriend = () => setFriends(friends.filter((f)=>f!="Ali"));

//   const updateOneFriend = () => setFriends(friends.map(
//     (f)=>f==="Ali" ?"Ali Karigor":f
//   ))

//   return (
//   <section>
//     {friends.map((f,keyValue) => (
//       <li key={keyValue}> {f} </li>
//     ))}
//     <button onClick={addOneFriend}>Set New Friends</button>
//     <button onClick={removeOneFriend}>Remove Friends</button>
//     <button onClick={updateOneFriend}>Update Friends</button>
//   </section>
//   );
  
// };

// export default App

// import { useState } from "react"

// const App = () => {
//   const [movie,setMovie] = useState([
//     {title: "Endgame", rating:8,},
//     {title: "John Wick",rating:8,},
//     {title: "spiderman",rating:7}
//   ])

//   const handleChange = () => setMovie({...movie, title:"PUBG"});

    // const copyMovie = {
    //   ... movie,
    //   title: "Hell",
    //   rating:7.5,
    // }
  

  // return (
  //   <section>
{/*     
      <h1>Name: {movie.title}</h1>
      <h2>Rating: {movie.rating}</h2>
      <button onClick={handleChange}>Change</button> */}
      
      {/* {movie.map(( m,i) =>(
        <li key={i}>{m.title}</li>
      ))}
    </section>
   
  )
}

export default App */}

import { useState } from "react"
import ComponentOne from "./Component/ComponentOne"
import ComponentTwo from "./Component/ComponentTwo"
import Example1 from "./Component/ExampleOne"
import ExampleOne from "./Component/ExampleOne"
import ExampleTwo from "./Component/ExampleTwo"
import TodoList from "./Component/TodoList"

const App = () => {
  // const [count,setCount] = useState(0)
  return (
    <div>
      {/* <ComponentOne/>
      count={count} onClickHandler={()=>setCount(count+1)} *By passing props with sharing the state between two components from parent
      <ComponentTwo count={count} onClickHandler={()=>setCount(count+1)}/>
      <ExampleOne/> */}
      {/* <ExampleTwo/> */}
      <TodoList/>
    </div>
  )
}

export default App