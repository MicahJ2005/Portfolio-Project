import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import AdminForm from '../AdminForm/AdminForm';
import AdminTable from '../AdminTable/AdminTable';

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
        <section>
            <button onClick={this.backToProjects}>Back to Projects</button>
            <h2>Admin Page</h2>
        </section>
        
        <section> 
            <AdminForm /> 
        </section>
<br></br>
        <section>
            <AdminTable />
        </section>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps) (AdminPage);