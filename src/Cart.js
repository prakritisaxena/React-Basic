import React from 'react';
import CartTotal from './CartTotal';
import Item from './Item';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 1, name: 'item1', qty: 2, price: 30},
        {id: 2, name: 'item2', qty: 5, price: 10},
        {id: 3, name: 'item3', qty: 7, price: 120}
      ]
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  addItem(id) {
    let items = this.state.items;
  }

  removeItem(id) {
  }

  increaseQuantity(id) {

  }

  decreaseQuantity(id) {

  }

  render() {
    let cartTotal = 0;
    return (
      <div>

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
