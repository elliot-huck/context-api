import React, { Component } from "react"

export default class ThemeSelector extends Component {
  render() {
    return (
      <select>
        <option>Select a color...</option>
        <option value="red">Fire</option>
        <option value="blue">Water</option>
        <option value="green">Grass</option>
        <option value="yellow">Electric</option>
      </select>
    )
  }

}