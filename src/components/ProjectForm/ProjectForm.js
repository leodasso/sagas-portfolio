import React, { Component } from 'react';
import './ProjectForm.css';
import { connect } from 'react-redux';

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

/**ProjectForm handles the creation and submission of 
 * new projects. It dispatches a redux action with the data for
 * the new project.
 */
class ProjectForm extends Component {

    state = {
        ...defaultState,
    }

    updateState = propName => event => {
        this.setState({[propName]: event.target.value});
    }

    componentDidMount() {
        // get the list of tags from the server
        this.props.dispatch({type:'FETCH_TAGS'});
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

        // Check if the user has given all the required fields.
        // If they havent, give a specific alert of what fields they need.
        let required = [];
        if (this.state.name === '' ) {
            required.push('Name');
        }
        if (this.state.github === '') {
            required.push('GitHub');
        }
        if (this.state.date === '') {
            required.push('date');
        }
        if (this.state.tags === '') {
            required.push('tags');
        }
        if (required.length > 0) {
            alert('You need to fill in ' + required.join(', ') + ' to continue!');
            return;
        }

        // submit the project here
        this.props.dispatch({
            type:'UPLOAD_PROJECT',
            payload: {...this.state},
        })

        // clear out the input fields
        this.setState({
            ...defaultState,
        });
    }

    render() {

        console.log('tags:', this.props.tags);

        const classes = this.props.classes;

        return (
            <div className="project-form">
                <Typography variant="h4">Add New Project</Typography>
                <Divider/>

                {/* Not using the form 'onSubmit' here because it doesn't intercept MaterialUI Button clicks */}
                <form className="input-container">
                        {this.createInput('Name', 'text', 'name')}
                        {this.createInput('10/31/2015', 'date', 'date')}
                        {this.createInput('Tag', 'number', 'tags')}
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

const reduxMap = reduxState => reduxState;

export default  connect(reduxMap)(
                withStyles(styles)(
                    ProjectForm)
                );