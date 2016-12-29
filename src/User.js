import React from 'react';

export default class User extends React.Component {
  render() {
    return (
      <div>
        <p>This is {this.props.params.name}</p>
        <p>The address is {this.props.location.query.address}</p>
      </div>
    )
  }
}
