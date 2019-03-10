import React, { Component } from 'react';
import './Admin.css';

// material UI
import { Button, Paper, withStyles } from '@material-ui/core';

// style for the material UI stuff.
const styles = {

    mainPaper: {
        backgroundColor: '#edde5a',
        margin: '44px',
        minHeight: '300px',
        padding: '24px',
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

                Add New Project
                <form>
                    <input placeholder="name"/>
                    <input placeholder="date" type="date"/>
                    <input placeholder="tag"/>
                    <input placeholder="github url" type="url"/>
                    <input placeholder="website url (optional)" type="url"/>
                    <input placeholder="description (optional)"/>

                </form>
            </Paper>
            </>
        );
    }
}

export default withStyles(styles)(Admin);
