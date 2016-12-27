import React from 'react';
import Header from './Header';
import Users from './Users';
import Footer from './Footer';

export default class UserPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Users></Users>
        <Footer></Footer>
      </div>
    )
  }
}
