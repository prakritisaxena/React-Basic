import React from 'react';
import Header from './Header';
import Users from './Users';
import Footer from './Footer';

export default class UserPage extends React.Component {


  render() {
    return (
      <div>
        <Header/>
        <Users/>
        <Footer/>
      </div>
    )
  }
}
