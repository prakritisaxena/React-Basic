import React from 'react';

export default class CartTotal extends React.Component {

  render() {
    return (
      <h2>Cart Total is: {this.props.total}</h2>
    )
  }
}

CartTotal.propTypes = {
  total: React.PropTypes.number
};
