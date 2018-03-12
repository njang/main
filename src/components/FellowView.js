import React, {Component} from 'react'
// import {Link} from 'react-router-dom';

class FellowView extends Component {
  	render(){
    	return(
	    	<div className='col-lg-4 col-sm-6 text-center mb-4'>
	            <img className='rounded-circle img-fluid d-block mx-auto' src={ this.props.avatar } alt={ this.props.fellowName} />
	            <h3>{ this.props.fellowName }</h3>
	            <p>https://www.linkedin.com/in/{ this.props.linkedIn }</p>
	            <p>https://github.com/{ this.props.github }</p>
	        </div>
    	)
  	}
}

export default FellowView