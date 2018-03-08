import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class Navbar extends Component {
  render() {
    return (
		<div>
			<ul className="header">
				<li><NavLink exact to="/">Home</NavLink></li>
				<li><NavLink to="/works">Works</NavLink></li>
				<li><NavLink to="/contact">Contact</NavLink></li>
			</ul>
		</div>
    );
  }
}
 
export default Navbar;