import React, { Component } from "react"
import BoxTitle from "./Title"

export default class BoxInner extends Component {
  render() {
    return (

      <div className={this.props.boxClass + " " + this.props.theme}>
        <BoxTitle>{this.props.theme}</BoxTitle>
        <button className={this.props.theme}>A button</button>
      </div>
    )
  }
}