import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";


class Main extends Component {
    render() {
        return (
        	<HashRouter>
	            <div className="App">
					<h1>Simple SPA</h1>
					<ul className="header">
						<Route path="/" component={Home}/>
			            <Route path="/stuff" component={Stuff}/>
			            <Route path="/contact" component={Contact}/>
					</ul>
	            </div>
        	</HashRouter>
        );
    }
}

export default Main;
