import React from 'react';

export default class UserDetail extends React.Component {

  render() {
    return (
      <ul>
        <li>{this.props.user.name}</li>
        <li>{this.props.user.age}</li>
        <li>{this.props.user.email}</li>
        <li>{this.props.user.gender}</li>
        <li>{this.props.user.isActive}</li>
      </ul>
    )
  }
}
