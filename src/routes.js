import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import EditBook from './components/EditBook';
import ViewBook from './components/ViewBook';
import Dashboard from './components/Dashboard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard}/>
    {/*<Route path="bookslist" component={BooksList}/>*/}
    <Route path=":id" component={ViewBook}/>
    <Route path=":id/edit" component={EditBook}/>
  </Route>
)