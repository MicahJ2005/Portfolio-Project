import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class ProjectPage extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <h2>Project Page</h2>
        <ul>
            {JSON.stringify(this.props.reduxState)}
            {this.props.reduxState.projectReducer.map((project) => {
                return(
                    <li key={project.id}>Name: {project.name} Description: {project.description} 
                    Thumbnail: {project.thumbnail} Website: {project.website} github: {project.github} Date Complete: {project.date_complete} </li>
                )
            })}
        </ul>
        
      </div>
    );
  }
}
const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps) (ProjectPage);