import React, { Component } from 'react';
import '../App/App.css';
import { HashRouter as Link} from 'react-router-dom';

class Header extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
        <header id="header">
            <h1>Micah's Portfolio</h1>
        </header>
     
    );
  }
}

export default Header;