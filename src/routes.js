import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import HomePage from './HomePage';
import Users from './Users';
import User from './User';
import LoginFailed from './LoginFailed';
import LoginForm from './LoginForm';

let isLoggedIn = false;

function checkAuth(nextState, replace) {
  if(!isLoggedIn) {
    replace({
      path: '/'
    });
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginForm}/>
    <Route path="homepage" component={HomePage}/>
    <Route path="aboutus" component={AboutUs}/>
    <Route path="contactus" component={ContactUs}/>
    <Route path="users" component={Users}>
      <Route path=":name" component={User} onEnter={checkAuth}></Route>
    </Route>
    <Route path="loginFailed" component={LoginFailed}/>

  </Route>
)
