import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class Navbar extends Component {
  render() {
    return (
		<div>
			<ul className="header row align-items-center justify-content-center">
				<li className='row'><NavLink exact to="/">Home</NavLink></li>
				<li className='row'><NavLink to="/works">Works</NavLink></li>
				<li className='row'><NavLink to="/contact">Contact</NavLink></li>
			</ul>
		</div>
    );
  }
}
 
export default Navbar;