import React, { Component } from 'react';
import './App.css';
import Profile from '../Profile/Profile';
import Project from '../Project/Project';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
      <Profile />


      <div>
        <Project />
        <Project />
        <Project />
        <Project />

      </div>
      </div>
    );
  }
}

export default App;
