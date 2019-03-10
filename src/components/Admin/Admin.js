import React, { Component } from 'react';
import './Admin.css';

// material UI
import { Button, Paper, withStyles } from '@material-ui/core';
import ProjectForm from '../ProjectForm/ProjectForm';
import ProjectTable from '../ProjectTable/ProjectTable';

// style for the material UI stuff.
const styles = {

    mainPaper: {
        backgroundColor: '#edde5a',
        margin: '44px',
        minHeight: '300px',
        padding: '24px',
        paddingBottom: '34px',
    }

}

class Admin extends Component {

    onClickBack = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <>
            <div className="admin-title">
                <h1 className="headline">Admin</h1>
                <br/>
                <Button 
                    onClick={this.onClickBack}
                    color="inherit"
                    variant="outlined">
                    Back to Projects
                </Button>
            </div>
            <Paper className={this.props.classes.mainPaper}>

                <ProjectForm />
                <ProjectTable />
            </Paper>
            </>
        );
    }
}

export default withStyles(styles)(Admin);
