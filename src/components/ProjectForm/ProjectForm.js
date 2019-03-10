import React, { Component } from 'react';

// material UI
import { Button, withStyles } from '@material-ui/core';

// style for the material UI stuff.
const styles = {
}

class ProjectForm extends Component {

    render() {
        return (
            <div>
                <h3>Add New Project</h3>
                <form>
                    <input placeholder="name"/>
                    <input placeholder="date" type="date"/>
                    <input placeholder="tag"/>
                    <input placeholder="github url" type="url"/>
                    <input placeholder="website url (optional)" type="url"/>
                    <input placeholder="description (optional)"/>
                    <Button>Submit</Button>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(ProjectForm);