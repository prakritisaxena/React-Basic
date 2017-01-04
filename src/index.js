/* eslint-disable no-console */
import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
// import Student from './Student';
// import AppDay2 from './Day-2/AppDay2';
// import {createStore, combineReducers, applyMiddleware} from 'redux';

let app = document.getElementById('main');


render(<Provider store={store}>
    <App/>
  </Provider>, app);

// const initialState = {
//   name: 'Kapil',
//   age: 25
// };
//
// const usersReducer = (state = initialState, action) => {
//
//   if(action.type === 'CHANGE_NAME') {
//     return {...state, name: action.name};
//     // return Object.assign({}, state, {name: action.name});
//   }
//   else if(action.type === 'CHANGE_AGE') {
//     return {...state, age: action.age};
//     // return Object.assign({}, state, {age: action.age});
//   }
//
//   return state;
// };
//
// const initialTweets = [1,2,3,4];
// const tweetsReducer = (state = initialTweets, action) => {
//   if(action.type === 'ADD_TWEET') {
//     return [...state, action.tweet];
//   }
//
//   if(action.type === 'REMOVE_TWEET') {
//     let newTweetsState = [].concat(state);
//     newTweetsState.pop();
//     return newTweetsState;
//   }
//   return state;
// };
//
// const logger = (store) => (next) => (action) => {
//   console.log(action.type, "ACTION");
//   return next(action);
// };
//
// const errorHandler = (store) => (next) => (action) => {
//   try {
//     next(action);
//   } catch(e) {
//     console.log(action.type, "ACTION");
//   }
// };
//
// const middleware = applyMiddleware(logger, errorHandler);
//
// const store = createStore(combineReducers({
//   user: usersReducer,
//   tweets: tweetsReducer
// }), middleware);
//
// store.subscribe(() => {
//   console.log('Store has changed', store.getState());
// });
//
// console.log("Initial state", store.getState());
//
// store.dispatch({
//   type: 'CHANGE_NAME', name: 'Manoj'
// });
//
// store.dispatch({
//   type: 'CHANGE_AGE', age: 27
// });
//
// store.dispatch({
//   type: 'ADD_TWEET', tweet: 222
// });
//
// store.dispatch({
//   type: 'REMOVE_TWEET'
// });
//
//
