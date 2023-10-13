import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1 className='navbar__heading'>
            <span style={{color:"#dbae87"}}>Event</span> Spirit
        </h1>
        <ul className='navbar__options'>
            <Link to={"/"} className='text__link'><li className='navbar_navigate'>Home</li></Link>
            <Link to={""} className='text__link'><li className='navbar_navigate'>Events</li></Link>
            <Link to={"/about"} className='text__link'><li className='navbar_navigate'>About</li></Link>
            <Link to={""} className='text__link'><li className='navbar_navigate'>Create an Event</li></Link>
        </ul>

        <div className='navbar__buttons'>
            <button className='navbar__b'>Login</button>
            <button className='navbar__b'>Register</button>
        </div>


    </nav>
  )
}

export default Navbar