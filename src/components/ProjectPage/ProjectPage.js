import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class ProjectPage extends Component {
  // Renders the entire app on the DOM

  adminPage = (event) => {
    console.log('in adminButton');
    event.preventDefault();
    this.props.history.push('/admin');
  }


  render() {
    return (
      <div>
        <button onClick={this.adminPage}>Admin Page</button>
        <h2>Project Page</h2>
        <ul>
            <pre>{JSON.stringify(this.props.reduxState.tagsReducer)}</pre>
            {this.props.reduxState.projectReducer.map(project => {
                // {this.props.reduxState.tagsReducer.map( tag  => {
                return(
                    <Card key={project.id}>
                        <CardContent>
                            <img id="thumbnail" alt="thumbnail" src={project.thumbnail}/> <br></br>
                        </CardContent>
                        <CardContent>
                            {project.website === '' ? '' : <a href={project.website}>Website</a>}<br></br>
                            {project.github === '' ? '' : <a href={project.github}>GitHub</a>}<br></br>
                        </CardContent>
                        <CardContent>
                            Name: {project.name} <br></br>
                            {project.description === '' ? '' : <li>Description: {project.description}</li>} <br></br>
                            {project.date_completed === '' ? '' : <li>Date Complete: {project.date_completed}</li>} <br></br>
                            <br></br>
                            {/* {JSON.stringify(this.props.reduxState.tagsReducer)} */}
                            {this.props.reduxState.tagsReducer.map((tag, index)  => {
                                return (<li key={tag.id}> Project tag: {tag.name} </li>
                                    )
                            })}
                        </CardContent>
                        <CardContent>
                            
                        </CardContent>
                    </Card>
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