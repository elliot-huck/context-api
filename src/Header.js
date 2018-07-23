import React, { Component } from "react"

export default class Header extends Component {
  render() {
    return (

      <div className="header">
      <h3>Color Themes</h3>
      <select>
        <option>Select a color...</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="black">Black</option>
      </select>
      </div>
    )
  }
}