import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';



// import { FormHelperText } from '@material-ui/core';

const newProject = {
    name: '',
    description: '',
    date_completed: '',
    tag_id: '',
    github: '',
    website: '',
}

class AdminPage extends Component {
  // Renders the entire app on the DOM

  state = newProject

  backToProjects = (event) => {
    console.log('in adminButton');
    event.preventDefault();
    this.props.history.push('/');
  }

  handleChange = event => {
    this.setState({
            [event.target.name]: event.target.value,
    });
}

addNewProject = event => {
    console.log('newProject', this.state);
    event.preventDefault();
    
    this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state })
    this.setState(newProject);
}

deleteProject = (id) => {
    console.log('in delete project')
    this.props.dispatch({ type: 'DELETE_PROJECT', payload: id})

}

  render() {
    return (
      <div>
        <section>
            <button onClick={this.backToProjects}>Back to Projects</button>
            <h2>Admin Page</h2>
        </section>

        <section>
        <form onSubmit={this.addNewProject}>
            <FormControl id="form">
                    <TextField 
                        onChange={this.handleChange}
                        value={this.state.name}
                        id="textField"
                        type='text'
                        name='name'
                        label="Name"
                        helperText="Name of Project"
                        // value=
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                
                    <TextField 
                        onChange={this.handleChange}
                        value={this.state.description}
                        id="textField"
                        type='text'
                        name='description'
                        label="Description"
                        helperText="Description of Project"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField 
                        onChange={this.handleChange}
                        value={this.state.date_completed}
                        id="textField"
                        name='date_completed'
                        label="Date"
                        helperText="Project Completion Date"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        
                    />
                    
                    
                            <Select
                                value={this.state.tag_id}
                                onChange={this.handleChange}
                                label = "tag"
                                name="tag_id"
                                >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>React</MenuItem>
                                    <MenuItem value={2}>jQuery</MenuItem>
                                    <MenuItem value={3}>Node</MenuItem>
                                    <MenuItem value={4}>SQL</MenuItem>
                                    <MenuItem value={5}>Redux</MenuItem>
                                    <MenuItem value={6}>HTML</MenuItem>
                            </Select>

                    <TextField 
                        onChange={this.handleChange}
                        value={this.state.github}
                        name="github"
                        type='text'
                        id="textField"
                        label="GitHub URL"
                        helperText="URL of GitHub Project"
                        // value=
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField 
                        onChange={this.handleChange}
                        value={this.state.website}
                        name="website"
                        type='text'
                        id="textField"
                        label="Website URL (optional)"
                        helperText="Website URL (optional)"
                        // value=
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
            
                    <Button type="submit" variant="outlined" >Submit</Button>

                </FormControl>
            </form>
        </section>
<br></br>
        <section>

            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography>Name</Typography></TableCell>
                            <TableCell><Typography>Delete?</Typography></TableCell>
                        </TableRow>
                    </TableHead>

                
            
                {this.props.reduxState.projectReducer.map((project) => {
                    return(
                        <TableBody key={project.id}>
                            <TableRow>
                                <TableCell>{project.name}</TableCell>
                                <TableCell><Button onClick={() => {this.deleteProject(project.id)}}variant="outlined">Delete</Button></TableCell>
                            </TableRow>
                            
                        </TableBody>
                        
                    )
                })}
                </Table>
            </Paper>


        </section>
        
    
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps) (AdminPage);