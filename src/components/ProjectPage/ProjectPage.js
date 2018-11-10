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
            
            {this.props.reduxState.projectReducer.map((project) => {
                
                return(
                    <Card key={project.id}>
                        <CardContent>
                            <img id="thumbnail" alt="thumbnail" src={project.thumbnail}/> <br></br>
                        </CardContent>
                        <CardContent>
                            <a href={project.website}>Website</a> <br></br>
                            <a href={project.github}>GitHub</a><br></br>
                        </CardContent>
                        <CardContent>
                            Name: {project.name} <br></br>
                            Description: {project.description} <br></br>
                            Date Complete: {project.date_completed} <br></br>
                            Project Tag: {project.tag_id} <br></br>
                        </CardContent>
                        <CardContent>
                            {JSON.stringify(this.props.reduxState.tagsReducer)}
                            {this.props.reduxState.tagsReducer.map(tag => {
                                return( <li>{tag.name} </li>
                                    )
                                
                            })}
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