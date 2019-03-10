import React, { Component } from 'react';
import { connect } from 'react-redux';

// material UI
import {
    Table, TableBody, TableRow, TableCell,
    Button, TableHead, withStyles
} from '@material-ui/core';

// Custom style for the Material Table
const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#d6c95c',
        borderColor: 'rgba(0, 0, 0, .3)',
    },
    body: {
        borderColor: 'rgba(0, 0, 0, .3)',
    },
}))(TableCell);

class ProjectTable extends Component {

    componentDidMount() {
        // fetch the projects data when the component mounts
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }

    render() {

        const projects = this.props.projects;

        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>Name</CustomTableCell>
                            <CustomTableCell>Description</CustomTableCell>
                            <CustomTableCell>Delete</CustomTableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {
                            projects.map((project, index) => (
                                <TableRow key={index}>
                                    <CustomTableCell>{project.name}</CustomTableCell>
                                    <CustomTableCell>{project.description}</CustomTableCell>
                                    <CustomTableCell><Button>X</Button></CustomTableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        );
    }
}

const reduxMapper = reduxState => reduxState;

export default connect(reduxMapper)(
    withStyles()(
        ProjectTable));