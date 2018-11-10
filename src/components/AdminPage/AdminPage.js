import React, { Component } from 'react';
import '../App/App.css';


class AdminPage extends Component {
  // Renders the entire app on the DOM

  backToProjects = (event) => {
    console.log('in adminButton');
    event.preventDefault();
    this.props.history.push('/');
  }


  render() {
    return (
      <div>
        <button onClick={this.backToProjects}>Back to Projects</button>
        <h2>Admin Page</h2>
        
    
      </div>
    );
  }
}

export default AdminPage;