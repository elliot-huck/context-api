import React, { Component } from "react"
import ThemeContext from "./ThemeContext"


export default class BoxButton extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {themeName => <button className={themeName}>Button</button>}
      </ThemeContext.Consumer>
    )
  }
}
