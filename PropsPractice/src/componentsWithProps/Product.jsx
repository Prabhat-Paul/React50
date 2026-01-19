import React from 'react'

const Product = ({name,brand,price}) => {
  return (
    <div>
      <h2>Product Name:{name}</h2>
      <h2>Brand:{brand}</h2>
      <h3>Price: ₹{price}</h3>
    </div>
  )
}

export default Product