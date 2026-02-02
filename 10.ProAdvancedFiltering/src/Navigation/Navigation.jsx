import React from 'react'
import './Navigation.css'
import { AiOutlineShoppingCart,AiOutlineUserAdd } from "react-icons/ai";
import {FiHeart} from "react-icons/fi";

const Navigation = ({handleInputChange,query}) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type='text'
          className='search-input'
          placeholder='Search your shoes '
          value={query}
          onChange={handleInputChange}
        />
      </div>

      <div className="profile-container">
        <a href='#'>
          <FiHeart className='nav-icons'/>
        </a>

        <a href='#'>
          <AiOutlineShoppingCart className='nav-icons'/>
        </a>

        <a href='#'>
          <AiOutlineUserAdd className='nav-icons'/>
        </a>
      </div>
    </nav>
  )
}

export default Navigation