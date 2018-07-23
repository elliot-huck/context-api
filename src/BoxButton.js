import React, {Component} from "react"

export default class BoxButton extends Component {
render() {
  return (
    <button className={this.props.theme}>Button</button>
  )
}
}
