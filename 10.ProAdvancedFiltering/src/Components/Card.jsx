import React from 'react'
import { FaStar } from "react-icons/fa6";
import { IoBagAddOutline } from "react-icons/io5";
const Card = ({img,title,star,reviews,newPrice,prevPrice}) => {
  return (
    <section className="card">
      <img 
      src={img} 
      alt={title}
      className='card-img'
      />
      <div className="card-details">
        <h3 className="card-title">
          {title}
        </h3>
        <section className="card-reviewa">
          {star}
          {star}
          {star}
          {star}
        <span className='total-reviews'>{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> ${newPrice}
          </div>
          <div className="bag">
            <IoBagAddOutline className='bag-icon'/>
          </div>
        </section>
      </div>
      </section>
  )
}

export default Card