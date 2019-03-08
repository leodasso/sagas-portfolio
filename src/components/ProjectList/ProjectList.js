import React, { Component } from 'react';
import Project from '../Admin/Admin';

class ProjectList extends Component {

    render() {
        return (
            <div>
                <h3>My Projects</h3>
                <Project />
                <Project />
                <Project />
                <Project />

            </div>
        );
    }
}

export default ProjectList;
