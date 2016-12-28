import * as React from "react";
export default class InputElement extends React.Component {

  render() {
    return (
      <input type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.updateUser}/>
    )
  }
}
