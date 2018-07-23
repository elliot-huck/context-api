import React, { Component } from "react"
import BoxInner from "./BoxInner"

export default class Box extends Component {
  render() {
    return (

      <div className="box">
        {this.props.text}
        <BoxInner boxClass={"innerBox"} theme={"red"} />
        <BoxInner boxClass={"innerBox"} theme={"blue"}/>
        <BoxInner boxClass={"innerBox"} theme={"green"} />
        <BoxInner boxClass={"innerBox"} theme={"black"} />
      </div>
    )
  }
}