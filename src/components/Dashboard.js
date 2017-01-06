import React from 'react';
import {Provider} from 'react-redux';
import createStore from '../store';
import BooksList from './BooksList';

export default class Dashboard extends React.Component {

  render() {
    let myStore = createStore();
    return (
      <Provider store={myStore}>
        <BooksList/>
      </Provider>

    );
  }
}
