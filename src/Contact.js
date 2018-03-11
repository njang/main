import React, { Component } from "react";
 
class Contact extends Component {
    render() {
        return (
            <div>
                <a className='row my-2' href='https://www.github.com/njang' target='_blank' rel='noopener noreferrer'>
                    {/*<img className='col' src='images/icons/github.svg' height='48px' alt='Github' />*/}
                    <i class="fab fa-github h1"></i>
                </a>
                <a className='row my-2' href='https://www.linkedin.com/in/neojang' target='_blank' rel='noopener noreferrer'>
                    {/*<img className='col' src='images/icons/linkedin.svg' height='48px' alt='LinkedIn' />*/}
                    <i class="fab fa-linkedin h1"></i>
                </a>
                <a className='row my-2' href='mail:neo.w.jang@gmail.com'>
                    {/*<img className='col' src='images/icons/gmail.svg' height='48px' alt='Gmail' />*/}
                    <i class="fas fa-envelope h1"></i>
                </a>
                
            </div>
        );
    }
}
 
export default Contact;