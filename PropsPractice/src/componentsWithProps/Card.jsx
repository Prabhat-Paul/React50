import React from 'react'

// const Product = (props) => {
//   return (
//     <section>
//       <h2>Product Name: {props.name}</h2> 
//       <h2>Brand: {props.brand} </h2>
//       <h3>Price: ₹{props.price}</h3>
      
//     </section>
    
//   )
// }

const Card = ({children}) => {
  return<div>{children}</div>
}
export default Card