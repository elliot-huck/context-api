import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import Box from "./Box"
import ThemeSelector from './ThemeSelector';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ThemeSelector />
        <Box />
      </React.Fragment>
    );
  }
}

export default App;
