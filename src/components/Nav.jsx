import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
export default function Nav() {
  return (
    <div>
    <nav className='navBar'>
        <NavLink className={"navBarInfo"} to="/">
          Home
        </NavLink>       
    </nav>
    </div>
  )
}
