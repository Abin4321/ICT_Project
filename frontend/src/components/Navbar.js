import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  // Set state
  // Make Handleclick Function

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <ul className="nav-menu">
            <li>
                <a><i class="fa-solid fa-house"></i>Home</a>
            </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;