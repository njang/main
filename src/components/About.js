import React, { Component } from 'react';
import FellowView from './FellowView'

class About extends Component {
    constructor(){
        super()
        this.state = {
            team: [
                {
                    'name': 'Jake Chavez',
                    'avatar': 'https://avatars1.githubusercontent.com/u/32828225?s=120&v=4',
                    'linkedIn': 'jake-chavez',
                    'github': 'jake94chavez',
                    'gaProfile': 'jake-chavez'
                },
                {
                    'name': 'Lillian Chernin',
                    'avatar': 'https://avatars3.githubusercontent.com/u/30993518?s=120&v=4',
                    'linkedIn': 'lillian-chernin',
                    'github': 'LillianChernin',
                    'gaProfile': 'lillian-chernin'
                },
                {
                    'name': 'Marcy Lina',
                    'avatar': 'https://avatars0.githubusercontent.com/u/32626323?s=120&v=4',
                    'linkedIn': 'MarcyLina',
                    'github': 'marcyacevedo',
                    'gaProfile': 'marcyacevedo'
                },
                {
                    'name': 'Chris Hanten',
                    'avatar': 'https://avatars2.githubusercontent.com/u/31356942?s=120&v=4',
                    'linkedIn': 'christopherhanten',
                    'github': 'christopherhanten',
                    'gaProfile': 'chanten'
                },
                {
                    'name': 'Aleena Madni',
                    'avatar': 'https://avatars2.githubusercontent.com/u/32710993?s=120&v=4',
                    'linkedIn': 'aleena-madni',
                    'github': 'aleenamad',
                    'gaProfile': 'aleena-madni'
                },
                {
                    'name': 'Tess Craig',
                    'avatar': 'https://avatars3.githubusercontent.com/u/33147725?s=120&v=4',
                    'linkedIn': 'tesscraig',
                    'github': 'TessACraig89',
                    'gaProfile': 'tesscraig'
                },
                {
                    'name': 'Max Tessenholtz',
                    'avatar': 'https://avatars2.githubusercontent.com/u/33670521?s=120&v=4',
                    'linkedIn': 'maxtessenholtz',
                    'github': 'maxtea',
                    'gaProfile': 'max-tess'
                },
                {
                    'name': 'Jorge Rodriguez',
                    'avatar': 'https://avatars0.githubusercontent.com/u/33467228?s=120&v=4',
                    'linkedIn': 'jorgeivan-rodriguez',
                    'github': 'jorgeivvn',
                    'gaProfile': 'jorge-rodriguez'
                },
                {
                    'name': 'Scott Sheppard',
                    'avatar': 'https://avatars3.githubusercontent.com/u/7772230?s=120&v=4',
                    'linkedIn': 'wscottsh',
                    'github': 'wScottSh',
                    'gaProfile': 'wScottSh'
                }
            ]       
        }
    }
    render() {
        let cohort = this.state.team.map((fellow) => {
            return (
                <FellowView 
                    fellowName = { fellow.name }
                    avatar = { fellow.avatar }
                    linkedIn = { fellow.linkedIn }
                    github = { fellow.github }
                />
            )
        })
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-sm-6 mb-4'>
                        <h1 className='my-4'>Hello, my name is Neo.</h1>
                        <p>I’m a web developer and a code cobbler from Austin. I
                        In my past life, I’ve executed performance data analytics in electronic health records (EHR), and conducted Biomedical research in ultrasound bubbles.</p>
                    </div>          
                    <div className='col-lg-4 col-sm-6 text-center mb-4'>
                        <img className='rounded-circle img-fluid d-block mx-auto' width='200px' src='images/profile02.jpeg' alt='Profile of Neo Jang' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h2 className='my-4'>The Team</h2>
                        <p>In December 2017, 13 strangers embarked on a journey that will impact every member in the the most profound and wondrous ways that no one could have possibly foreseen. These are my fellow developers who accompanied me in not only learning, but also nerding-out, pontificating, laughing through spontaneous singing and dancing, which was impossibly all crammed into the shortest 13-weeks of my life.</p>
                    </div>
                    { cohort }
                </div>
            </div>
        );
    }
}

export default About;
