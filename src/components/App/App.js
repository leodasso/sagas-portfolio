import React, { Component } from 'react';
import './App.css';
import Profile from '../Profile/Profile';
import ProjectList from '../ProjectList/ProjectList';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Profile />
        <ProjectList />
      </div>
    );
  }
}

export default App;
