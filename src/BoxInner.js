import React, { Component } from "react"

export default class BoxInner extends Component {
  render() {
    return (

      <div className={this.props.boxClass + " " + this.props.theme}>
        <section>{this.props.theme}</section>
        <button className={this.props.theme}>A button</button>
      </div>
    )
  }
}