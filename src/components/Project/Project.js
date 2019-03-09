import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    projectCard: {
        backgroundColor: 'yellow',
    }
}

class Project extends Component {

    render() {

        const classes = this.props.classes;

        const project = this.props.projectData;
        return (
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.projectCard}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p>{project.github}</p>
                </Card>
            </Grid>
        );
    }
}

export default withStyles(styles)(Project);
