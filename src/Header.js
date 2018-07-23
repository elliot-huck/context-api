import React, { Component } from "react"
const ThemeContext = React.createContext("black");

export default class Header extends Component {


  render() {
    return (
      <div className="header">
      <h3>Your current theme is</h3>

      </div>
    )
  }
}