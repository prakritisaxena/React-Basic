import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default class BasicPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    )
  }
}
