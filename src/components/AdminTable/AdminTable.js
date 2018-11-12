import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

class AdminTable extends Component {
  // Renders the entire app on the DOM

    deleteProject = (id) => {
        console.log('in delete project')
        this.props.dispatch({ type: 'DELETE_PROJECT', payload: id})

    }

  render() {
    return (
        <section>

            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography>Name</Typography></TableCell>
                            <TableCell><Typography>Delete?</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                {this.props.reduxState.projectReducer.map((project) => {///mapping all projectReducer, including the JOIN from my router
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
    );
  }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps) (AdminTable);