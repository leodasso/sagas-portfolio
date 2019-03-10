import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    
    render() {
        return (
            <div className="Profile">
                <div className="name-area">
                    <h2>LEO</h2>
                    <h2>DASSO</h2>
                </div>
                <div className="info">
                    <p>Full-stack developer</p>
                    <p>Make it work</p>
                    <p>Make it purdy</p>
                </div>
            </div>
        );
    }
}

export default Profile;
