import React, { Component } from 'react';
import '../App/App.css';

//// The Header Page is part of the entire project, just componentized for better readability

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