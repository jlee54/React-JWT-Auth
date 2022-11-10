import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"

import Logout from './Logout'

function Navbar({setIsLoggedIn}) {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Logout setIsLoggedIn={setIsLoggedIn}></Logout>
      </li>
    </ul>
  );
}
export default Navbar;
