import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className='App'>

        {/*<header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
          <container>
              <nav>
                <div className='row'>
                  <div className='col-1 px-2 py-2'>
                    About
                  </div>
                  <div className='col-1 px-2 py-2'>
                    Works
                  </div>
                  <div className='col-6'></div>
                  <div className='col-4'>
                    <a href='https://www.linkedin.com/in/neojang/'> {/* Linkedin */}
                      <img width='32' width='32' className='mx-2' src='https://unpkg.com/simple-icons@latest/icons/linkedin.svg'/>
                    </a>  
                    <a href='https://github.com/njang'> {/* Github */}
                      <img width='32' width='32' className='mx-2' src='https://unpkg.com/simple-icons@latest/icons/github.svg'/>
                    </a>
                    <a href='https://codepen.io/neojang/'> {/* Codepen */}
                      <img width='32' width='32' className='mx-2' src='https://unpkg.com/simple-icons@latest/icons/codepen.svg'/>
                    </a>
                    {/* &nbsp;&nbsp; */}
                    {/* <a href='https://www.freecodecamp.org/njang'> {/* freeCodeCamp */} 
                      {/* <img width='32' width='32' src='https://unpkg.com/simple-icons@latest/icons/freecodecamp.svg'/> */}
                    {/* </a> */}
                  </div>
                </div>
              </nav>
              <section>
                <div className='row'>         
                  <div className='col-8'>
                    <article className='text-justify px-2 py-2'>
                      Hello, my name is Neo Jang, and I'm a data scientist. I’m currently a web developer fellow at the General Assembly in Austin. Previously, I’ve executed performance data analytics in electronic health records (EHR). In my former life, I studied Mechanical Engineering, where I collaborated with biomedical researchers on nonlinear simulation of ultrasonically insonified vessel tissues. Lastly, I enjoy cycling of different disciplines. If you have a good riding route or are in need of a riding buddy, feel free to contact me.
                    </article>
                  </div>
                  {/* <div className='col col-1'></div>
                  <div className='col-4'>
                    <img src='images/profile02.jpeg' alt='Profile image' width='240px' className='rounded-circle mx-auto my-5 .d-block' />
                  </div> */}
                </div>
              </section>
            </container>
                <div className='container'>

      {/* Introduction Row */}
      <h1 className='my-4'>About Us
        <small>It's Nice to Meet You!</small>
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>

      {/* Team Members Row */}
      <div className='row'>
        <div className='col-lg-12'>
          <h2 className='my-4'>The Team</h2>
        </div>
        <div className='col-lg-4 col-sm-6 text-center mb-4'>
          <img className='rounded-circle img-fluid d-block mx-auto' src='http://placehold.it/200x200' alt='' />
          <h3>John Smith
            <small>Job Title</small>
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>
        <div className='col-lg-4 col-sm-6 text-center mb-4'>
          <img className='rounded-circle img-fluid d-block mx-auto' src='http://placehold.it/200x200' alt='' />
          <h3>John Smith
            <small>Job Title</small>
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>
        <div className='col-lg-4 col-sm-6 text-center mb-4'>
          <img className='rounded-circle img-fluid d-block mx-auto' src='http://placehold.it/200x200' alt='' />
          <h3>John Smith
            <small>Job Title</small>
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>
        <div className='col-lg-4 col-sm-6 text-center mb-4'>
          <img className='rounded-circle img-fluid d-block mx-auto' src='http://placehold.it/200x200' alt='' />
          <h3>John Smith
            <small>Job Title</small>
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>
        <div className='col-lg-4 col-sm-6 text-center mb-4'>
          <img className='rounded-circle img-fluid d-block mx-auto' src='http://placehold.it/200x200' alt='' />
          <h3>John Smith
            <small>Job Title</small>
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>
        <div className='col-lg-4 col-sm-6 text-center mb-4'>
          <img className='rounded-circle img-fluid d-block mx-auto' src='http://placehold.it/200x200' alt='' />
          <h3>John Smith
            <small>Job Title</small>
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>
      </div>

    </div>

      </div>
    );
  }
}

export default About;
