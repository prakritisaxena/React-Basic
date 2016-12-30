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
      ],
      noOfItems: 3,
      input: ''
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  addItem() {
    let items = this.state.items;
    let nameAndPrice = this.state.input.split('-');

    items.push({
        id: this.state.noOfItems + 1,
        name: nameAndPrice[0],
        qty: 1,
        price: nameAndPrice[1]
      }
    );

    this.setState(Object.assign(this.state.items, items[this.state.noOfItems]));
    this.setState({
      noOfItems: this.state.noOfItems + 1
    });

  }

  removeItem(id) {
    let items = this.state.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items.splice(i, 1);
        this.setState({
          items: items
        });
        this.setState({
          noOfItems: this.state.noOfItems - 1
        });
      }
    }
  }

  increaseQuantity(id) {
    let items = this.state.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items[i].qty += 1;
        this.setState(Object.assign(this.state.items, items[i]));
        break;
      }
    }
  }

  decreaseQuantity(id) {
    let items = this.state.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items[i].qty -= 1;
        console.log('Quantity: ' + items[i].qty);
        this.setState(Object.assign(this.state.items, items[i]));
        if (items[i].qty === 0) {
          this.removeItem(i);
        }
        break;
      }
    }
  }

  updateValue(e) {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    let cartTotal = 0;
    return (
      <div>
        <div>
          <input type="text" value={this.state.input} onChange={this.updateValue}/>
          <button onClick={this.addItem}>Add Item</button>
        </div>
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
