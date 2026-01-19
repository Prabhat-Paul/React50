import Greeting from "./Props&Compo/Greeting"
import UserStatus from "./Props&Compo/UserStatus"
import Weather from "./Props&Compo/Weather"
//1st:
// const ValidPassword = () => {
// return <div>
//   <h1>Password is valid </h1>
//   <h2>All Good</h2>
// </div>
// }
// const InvalidPassword = () => (<h1>Password is invalid</h1>)


// const Password = () => {
//   const number = Math.random()
//   // if(number>=0.5){
//   //   return <ValidPassword />
//   // }

//   // return <InvalidPassword />
//   return number>=0.5?<ValidPassword/>:<InvalidPassword/>
// }
//2nd:
// const Cart = () => {
//   const cartItems= ['alu','peyaj','kola','chicken',]
//   return (
//     <div>
//     <h1>Cart 🛒</h1>
//     {cartItems.length>0 && <h2>You have {cartItems.length} items in your Cart</h2>}
//     <ol>
//       <h2>Products</h2>
//       {cartItems.map((item,index)=>(
//         <li key={index}>
//           {item}
//         </li>
//       ))}
//     </ol>
    
//   </div>
//   )
// }

const App = () => {
  return (
    <div>
      <UserStatus loggedIn={false} />
      <UserStatus loggedIn={true} />
      <UserStatus loggedIn={true} isAdmin={true}/>

      <Weather temperature={25}/>
      <Weather temperature={10}/>
      <Weather temperature={100}/>

      <Greeting timeOfDay="morning"/>
      <Greeting timeOfDay="night"/>
    </div>
  )
}

export default App