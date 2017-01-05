import React from 'react';
import AddItem from './components';

export default class Cart extends React.Component {
  render() {
    return (
      <div>
        <AddItem/>
        <table className="cartTable">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price(per unit)</th>
            <th></th>
            <th>Total Price</th>
          </tr>
          {
            this.state.items.map((item, index) => {
              cartTotal += item.price * item.qty;
              return <Item key={index} item={item} removeItem={this.removeItem} addItem={this.addItem}
                           increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity}/>;
            })
          }
        </table>

        <CartTotal total={cartTotal}/>
      </div>
    )
  }
}
