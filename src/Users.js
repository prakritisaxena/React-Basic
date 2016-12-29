import React from 'react';

export default class Users extends React.Component {
  render() {
    return (
      <div>
        This is Users Component
        {this.props.children}
      </div>
    )
  }
}
