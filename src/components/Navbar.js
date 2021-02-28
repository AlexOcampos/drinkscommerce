import React from "react";
import { Link } from "react-router-dom";

import logo from "../logo-first-letter.png";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img className="logo-first-letter" src={logo} alt="" />
          <span className="logo">locampos</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
