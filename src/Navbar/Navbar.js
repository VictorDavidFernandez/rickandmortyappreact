import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return   <div>
    <ul className="nav">
      <li className="nav-item">
        <NavLink to="/" className="nav-link">Characters</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/locations" className="nav-link">Locations</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/episodes" className="nav-link">Episodes</NavLink>
      </li>
    </ul>
  </div>

}

export default Navbar