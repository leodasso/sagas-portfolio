import React, { Component } from 'react';
import './ProjectForm.css';

// material UI
import { Button, TextField, Typography, withStyles, Divider } from '@material-ui/core';

// style for the material UI stuff.
const styles = theme => ({

    textField: {
        margin: theme.spacing.unit,
        flexGrow: 2,
    },
    submitButton: {
        width: '100%',
    }
});

class ProjectForm extends Component {

    createInput = (placeholder, inputType) => {
        return (
            <TextField 
                variant="filled" type={inputType}
                className={this.props.classes.textField} 
                placeholder={placeholder} 
            />
        )
    }

    render() {

        const classes = this.props.classes;

        return (
            <div className="project-form">
                <Typography variant="h4">Add New Project</Typography>
                <Divider/>
                <form className="input-container">
                        {this.createInput('Name', 'text')}
                        {this.createInput('10/31/2015', 'date')}
                        {this.createInput('jQuery', 'text')}
                        {this.createInput('GitHub URL', 'url')}
                        {this.createInput('Website URL', 'url')}
                        <TextField variant="filled" className={classes.textField} multiline rows="4"
                            fullWidth placeholder="description (optional)" />
                    <Button className={classes.submitButton}>Submit</Button>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(ProjectForm);