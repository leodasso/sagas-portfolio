import React, { Component } from 'react';

class Admin extends Component {

    render() {
        return (
            <div>
                <h1>My fun Admin page</h1>
                <a>Back to Projects</a>
                Add New Project
                <form>
                    <input placeholder="name"/>
                    <input placeholder="date" type="date"/>
                    <input placeholder="tag"/>
                    <input placeholder="github url" type="url"/>
                    <input placeholder="website url (optional)" type="url"/>
                    <input placeholder="description (optional)"/>

                </form>
            </div>
        );
    }
}

export default Admin;
