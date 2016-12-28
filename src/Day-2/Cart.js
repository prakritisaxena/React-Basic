import React from 'react';
import CartTotal from './CartTotal';
import Item from './Item';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {name: 'item1', qty: 2, price: 30},
        {name: 'item2', qty: 5, price: 10},
        {name: 'item3', qty: 7, price: 120}
      ]
    }
  }

  render() {
    let cartTotal = 0;
    return (
      <div>
        {
          this.state.items.map((item, index) => {

            cartTotal += item.price;

            return <table key={index}>
              <Item item={item}/>
            </table>
          })
        }
        <CartTotal total={cartTotal}/>
      </div>
    )
  }
}
