import React, { Component } from 'react';
import Project from '../Project/Project';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';


class ProjectList extends Component {

    componentDidMount() {

        this.props.dispatch({type: 'FETCH_PROJECTS'});
    }

    render() {

        return (
            <div>
                <h3>My Projects</h3>
                <Grid container spacing={16}>
                {
                    this.props.projects.map(project => <Project key={project.id} projectData={project}/>)
                }
                </Grid>
            </div>
        );
    }
}

const reduxMapper = reduxState => reduxState;

export default connect(reduxMapper)(ProjectList);
