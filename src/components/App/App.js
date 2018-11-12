import React, { Component } from 'react';
import Header from '../Header/Header';
import ProjectPage from '../ProjectPage/ProjectPage';
import AdminPage from '../AdminPage/AdminPage'
import { connect } from 'react-redux';
import { HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'RENDER_PROJECT', payload: this.state})
    // this.props.dispatch({ type: 'RENDER_TAG', payload: this.state})
    
}


  render() {
    return (
      
      <Router>
          <div>
            {/* //Header is componentized// */}
          <Header/>
          {/* //Routes for our ProjectPage and AdminPage// */}
          <Route exact path="/" component={ProjectPage}/>
          <Route exact path="/admin" component={AdminPage}/>
       
          </div>
      </Router>
    );
  }
}

export default connect() (App);
