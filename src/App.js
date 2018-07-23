import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import Box from "./Box"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Box text={"prop text"}/>
      </React.Fragment>
    );
  }
}

export default App;
