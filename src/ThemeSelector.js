import React, { Component } from "react"
import ThemeContext from "./ThemeContext"
export default class ThemeSelector extends Component {

  state = {
    theme: "default"
  }

  changeTheme = (evt) => {
    const value = evt.target.value;
    console.log(value);
    this.setState({ theme: value });
  }

  render() {
    return (
        <ThemeContext.Provider value={this.state.theme} >
          <select onChange={(evt) => { this.changeTheme(evt) }}>
            <option value="default">Select a theme...</option>
            <option value="red">Fire</option>
            <option value="blue">Water</option>
            <option value="green">Grass</option>
            <option value="yellow">Electric</option>
          </select>
          <div>{this.props.children}</div>
        </ThemeContext.Provider>
    )
  }

}