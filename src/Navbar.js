import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class Navbar extends Component {
  render() {
    return (
		<div>
			<ul className="header">
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/stuff">Stuff</NavLink></li>
				<li><NavLink to="/contact">Contact</NavLink></li>
			</ul>
		</div>
    );
  }
}
 
export default Navbar;