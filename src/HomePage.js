import React from 'react';
import Cart from './cart';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to Home Page!</h2>
        <Cart></Cart>
      </div>
    );
  }
}
