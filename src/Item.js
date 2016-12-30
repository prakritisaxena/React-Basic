import React from 'react';

export default class Item extends React.Component {

  render() {
    let {item} = this.props;
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.qty}</td>
        <td>{item.price}</td>
        <td>
          <button onClick={() => this.props.increaseQuantity(item.id)}>Increase</button>
          <button onClick={() => this.props.decreaseQuantity(item.id)}>Decrease</button>
        </td>
        <td>{item.price * item.qty}</td>
        <td><button onClick={()=>{this.props.removeItem(item.id)}}>Remove Item</button></td>
      </tr>
    )
  }
}

Item.propTypes = {
  item: React.PropTypes.object,
  addItem: React.PropTypes.func,
  removeItem: React.PropTypes.func,
  increaseQuantity: React.PropTypes.func,
  decreaseQuantity: React.PropTypes.func
}
