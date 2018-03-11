import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';

import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Works from "./Works";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
        	<BrowserRouter>
	            <div className="App">
					<Navbar />
					<ul className="content">
						<Route exact path="/" component={Home}/>
			            <Route path="/works" component={Works}/>
			            <Route path="/contact" component={Contact}/>
					</ul>
					<Footer />
	            </div>
        	</BrowserRouter>
        );
    }
}

export default Main;
