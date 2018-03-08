import React, { Component } from "react";
 
class Contact extends Component {
    render() {
        return (
            <div>
                <a className='row my-2' href='https://www.github.com/njang' target='_blank' rel='noopener noreferrer'>
                    <img className='col' src='images/icons/github.svg' height='48px' alt='Github' />
                </a>
                <a className='row my-2' href='https://www.linkedin.com/in/neojang' target='_blank' rel='noopener noreferrer'>
                    <img className='col' src='images/icons/linkedin.svg' height='48px' alt='LinkedIn' />
                </a>
                <a className='row my-2' href='mail:neo.w.jang@gmail.com'>
                    <img className='col' src='images/icons/gmail.svg' height='48px' alt='Gmail' />
                </a>
            </div>
        );
    }
}
 
export default Contact;