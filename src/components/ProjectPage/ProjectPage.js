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
            {/* <pre>{JSON.stringify(this.props.reduxState.projectReducer)}</pre> */}
            {this.props.reduxState.projectReducer.map(project => {
                // {this.props.reduxState.tagsReducer.map( tag  => {
                return(
                    <Card key={project.id}>
                        <CardContent id="left">
                            {project.thumbnail === '' ? '' : <li><img id="thumbnail" alt="thumbnail" src={project.thumbnail}/></li>}
                        </CardContent>
                        <CardContent id="right">
                            {project.website === '' ? '' : <a href={project.website}>Website</a>}
                        </CardContent>
                        <CardContent id="right">
                            {project.github === '' ? '' : <a href={project.github}>GitHub</a>}
                        </CardContent>
                        <CardContent>
                            Name: {project.name}
                        </CardContent>
                        <CardContent> 
                            {project.description === '' ? '' : <li>Description: {project.description}</li>}
                        </CardContent>
                        <CardContent>  
                            {project.date_completed === '' ? '' : <li>Date Complete: {project.date_completed}</li>}
                        </CardContent>
                        
                        <CardContent>
                            {project.tag === '' ? '' : <li>Project Tag: {project.tag}</li>}
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