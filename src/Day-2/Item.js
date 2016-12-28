import React from 'react';

export default class Item extends React.Component {
  render() {
    let {item} = this.props;
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.qty}</td>
        <td>{item.price}</td>
      </tr>
    )
  }


}
