import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class Navbar extends Component {
  render() {
    return (
		<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
			<ul className="header align-items-center justify-content-center">
				<li><NavLink exact to="/">Home</NavLink></li>
				<li><NavLink to="/works">Works</NavLink></li>
				<li><NavLink to="/contact">Contact</NavLink></li>
			</ul>
		</nav>
    );
  }
}
 
export default Navbar;