import React from 'react';

export default class AddItem extends React.Component {
  render() {
    return (<div>
      <input type="text" value={this.props.input} onChange={this.updateValue}/>
      <button onClick={this.addItem}>Add Item</button>
    </div>);
  }
}
