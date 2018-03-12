import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from './config/routes';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class Main extends Component {
    render() {
        return (
        	<BrowserRouter>
	            <div className="App">
					<Navbar />
					<div className="content">
						{ Routes }
					</div>
					<Footer />
	            </div>
        	</BrowserRouter>
        );
    }
}

export default Main;
