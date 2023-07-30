import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
  return (
    <div>
        <div className='heading'> React Cotext API </div>
        <div className="link">
            <Link to='/'> Home </Link>
            <Link to='/cart'> Cart </Link>
        </div>
    </div>
  )
}

export default Header