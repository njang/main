import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
 
class Footer extends Component {
	render() {
		return (
			<footer class='py-5 bg-dark'>
				<div class='container'>
					<p class='m-0 text-center text-white'>Handcobbled with &#10084;</p>
					<p class='m-0 text-center text-white'>Copyright &copy; Neo W. Jang 2018</p>
				</div>
			</footer>
		);
	}
}
 
export default Footer; 