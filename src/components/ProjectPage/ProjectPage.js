import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class ProjectPage extends Component {
  // Renders the entire app on the DOM

//adminPage is called onClick and send the user over to the AdminPage
  adminPage = (event) => {
    console.log('in adminButton');
    event.preventDefault();
    this.props.history.push('/admin');
  }


  render() {
    return (
      <section id="projectPage">
        <button onClick={this.adminPage}>Admin Page</button>
        <h2>Project Page</h2>
        <ul>
            {this.props.reduxState.projectReducer.map(project => { ///mapping all projectReducer, including the JOIN from my router
                return(//each CardContent below is conditionally rendering the provided information, except name
                    ////to add from images file input '../images/feedback.png' in place of {project.thumbnail}
                    <Card key={project.id} id="card">
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
                            {project.date_completed === '' ? '' : <li>Date Complete: {Date(project.date_completed)}</li>}
                        </CardContent>
                        <CardContent>
                            {project.tag === '' ? '' : <li>Project Specialty: <em>{project.tag}</em></li>}
                        </CardContent>
                    </Card>
                    )
             })}
        </ul>
        
      </section>
    );
  }
}
const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps) (ProjectPage);