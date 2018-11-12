import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';



const newProject = {
    name: '',
    description: '',
    date_completed: '',
    tag_id: '',
    github: '',
    website: '',
    thumbnail: '',
}

class AdminForm extends Component {
  // Renders the entire app on the DOM

    state = newProject

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


  render() {
    return (
      <div> 
        <section>
        <form onSubmit={this.addNewProject} id="form">
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
                </FormControl>
                <FormControl>
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
                </FormControl>
                <FormControl>
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
                </FormControl>   
                <FormControl>    
                <InputLabel shrink htmlFor="age-label-placeholder">
                        Tag
                     </InputLabel>
                            
                        <Select
                            id="textField"
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
                        
                        <FormHelperText>Project Tag</FormHelperText>
                </FormControl>
                <FormControl>
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
                </FormControl>
                <FormControl>
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
                </FormControl>
                <FormControl>
                        <TextField 
                            onChange={this.handleChange}
                            value={this.state.thumbnail}
                            name="thumbnail"
                            type='text'
                            id="textField"
                            label="Thumbnail"
                            helperText="Add a Thumbnail"
                            // value=
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                </FormControl>
                <FormControl>
                        <Button type="submit" variant="outlined" >Submit</Button>
                </FormControl>
            </form>
        </section>
        <br></br>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps) (AdminForm);