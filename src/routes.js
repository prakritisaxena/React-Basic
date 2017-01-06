import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import BooksList from './components/BooksList';
import BookDetails from './components/BookDetails';
import EditBook from './components/EditBook';
import ViewBook from './components/ViewBook';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard}/>
    {/*<Route path="bookslist" component={BooksList}/>*/}
    <Route path="bookdetails" component={BookDetails}>
      <Route path=":id" component={ViewBook}/>
      <Route path=":id/edit" component={EditBook}/>
    </Route>
    <Route path="aboutus" component={AboutUs}/>
    <Route path="contactus" component={ContactUs}/>
  </Route>
)