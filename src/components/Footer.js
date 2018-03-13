import React, { Component } from 'react';
 
class Footer extends Component {
	render() {
		return (
			<footer className='py-5 bg-dark'>
				<div className='container'>
					<p className='m-0 text-center text-white'>Handcobbled with <span className='text-danger'>&#10084;</span></p>
					<p className='m-0 text-center text-white'>&copy; Neo W. Jang 2017-2018</p>
				</div>
			</footer>
		);
	}
}
 
export default Footer; 