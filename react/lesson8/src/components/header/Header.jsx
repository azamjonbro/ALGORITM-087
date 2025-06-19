import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <nav>
      <li>
       <NavLink to="/">Dashboard</NavLink>
      </li>
      <li>
       <NavLink to="/home">Home</NavLink>
      </li>
      <li>
       <NavLink to="/about">About</NavLink>

      </li>
      <li></li>
      <li></li>
    </nav>
  )
}

export default Header
