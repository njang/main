import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './Header';
// Import default Bootstrap 4 CSS
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
          <container>
              <nav>
                <div class="row">
                  <div class="col-1 px-2 py-2">
                    About
                  </div>
                  <div class="col-1 px-2 py-2">
                    Works
                  </div>
                  <div class="col-6"></div>
                  <div class="col-4">
                    <a href="https://www.linkedin.com/in/neojang/"> {/* Linkedin */}
                      <img width="32" width="32" class="mx-2" src="https://unpkg.com/simple-icons@latest/icons/linkedin.svg"/>
                    </a>  
                    <a href="https://github.com/njang"> {/* Github */}
                      <img width="32" width="32" class="mx-2" src="https://unpkg.com/simple-icons@latest/icons/github.svg"/>
                    </a>
                    <a href="https://codepen.io/neojang/"> {/* Codepen */}
                      <img width="32" width="32" class="mx-2" src="https://unpkg.com/simple-icons@latest/icons/codepen.svg"/>
                    </a>
                    {/* &nbsp;&nbsp; */}
                    {/* <a href="https://www.freecodecamp.org/njang"> {/* freeCodeCamp */} 
                      {/* <img width="32" width="32" src="https://unpkg.com/simple-icons@latest/icons/freecodecamp.svg"/> */}
                    {/* </a> */}
                  </div>
                </div>
              </nav>
              <section>
                <div class="row">         
                  <div class="col-8">
                    <article class="text-justify px-2 py-2">
                      Hello, my name is Neo Jang, and I'm a data scientist. I’m currently a web developer fellow at the General Assembly in Austin. Previously, I’ve executed performance data analytics in electronic health records (EHR). In my former life, I studied Mechanical Engineering, where I collaborated with biomedical researchers on nonlinear simulation of ultrasonically insonified vessel tissues. Lastly, I enjoy cycling of different disciplines. If you have a good riding route or are in need of a riding buddy, feel free to contact me.
                    </article>
                  </div>
                  {/* <div class="col col-1"></div>
                  <div class="col-4">
                    <img src="images/profile02.jpeg" alt="Profile image" width="240px" class="rounded-circle mx-auto my-5 .d-block" />
                  </div> */}
                </div>
              </section>
            </container>

      </div>
    );
  }
}

export default App;
