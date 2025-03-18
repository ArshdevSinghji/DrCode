import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <h1>E-Commerce</h1>
      <div>
        <ul>
          <li>
            <Link to={'/'}>home</Link>
          </li>
          <li>
            <Link to={'/cart'}>cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
