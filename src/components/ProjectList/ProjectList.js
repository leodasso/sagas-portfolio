import React, { Component } from 'react';
import Project from '../Project/Project';
import {connect} from 'react-redux';

class ProjectList extends Component {

    componentDidMount() {

        this.props.dispatch({type: 'FETCH_PROJECTS'});
    }

    render() {

        return (
            <div>
                <h3>My Projects</h3>
                {
                    this.props.projects.map(project => <Project key={project.id} projectData={project}/>)
                }
            </div>
        );
    }
}

const reduxMapper = reduxState => reduxState;

export default connect(reduxMapper)(ProjectList);
