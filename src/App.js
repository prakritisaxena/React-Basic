/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react';
import Provider from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import createStore from './store';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header/>
        {
          this.props.children
        }
        <Footer/>
      </div>

    );
  }
}
