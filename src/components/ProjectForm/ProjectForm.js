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

const defaultState = {
    name: '',
    description: '',
    date: '',
    github: '',
    website: '',
    tags: '',
}

class ProjectForm extends Component {

    state = {
        ...defaultState,
    }

    updateState = propName => event => {
        this.setState({[propName]: event.target.value});
    }

    // Returns JSX for a styled Material UI input field.
    createInput = (placeholder, inputType, stateName) => {
        return (
            <TextField 
                variant="filled" type={inputType}
                className={this.props.classes.textField} 
                placeholder={placeholder} 
                onChange={this.updateState(stateName)}
                value={this.state[stateName]}
            />
        )
    }

    onSubmit = event => {
        event.preventDefault();

        console.log('submitted');
        let required = [];
        if (this.state.name === '' ) {
            required.push('Name');
        }
        if (this.state.github === '') {
            required.push('GitHub');
        }
        if (required.length > 0) {
            alert('You need to fill in ' + required.join(', ') + ' to continue!');
            return;
        }

        // submit the project here

        // clear out the input fields
        this.setState({
            ...defaultState,
        });
    }

    render() {

        const classes = this.props.classes;

        return (
            <div className="project-form">
                <Typography variant="h4">Add New Project</Typography>
                <Divider/>

                {/* Not using the form 'onSubmit' here because it doesn't intercept MaterialUI Button clicks */}
                <form className="input-container">
                        {this.createInput('Name', 'text', 'name')}
                        {this.createInput('10/31/2015', 'date', 'date')}
                        {this.createInput('jQuery', 'text', 'tags')}
                        {this.createInput('GitHub URL', 'url', 'github')}
                        {this.createInput('Website URL (optional)', 'url', 'website')}
                        <TextField variant="filled" className={classes.textField} multiline rows="4"
                            fullWidth placeholder="description (optional)" value={this.state.descriptionsd}
                            onChange={this.updateState('description')}
                            />
                    <Button onClick={this.onSubmit} className={classes.submitButton}>Submit</Button>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(ProjectForm);