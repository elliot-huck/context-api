import React, { Component } from "react"
import BoxTitle from "./BoxTitle"
import BoxButton from "./BoxButton"

export default class BoxInner extends Component {
  render() {
    return (

      <div className={this.props.boxClass + " " + this.props.theme}>
        <BoxTitle>{this.props.theme}</BoxTitle>
        <BoxButton theme={this.props.theme} />
      </div>
    )
  }
}