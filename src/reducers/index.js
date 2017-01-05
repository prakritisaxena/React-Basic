import {combineReducers} from 'redux';
import userReducer from './user.reducer';
import tweetReducer from './tweets.reducer';
import clockReducer from './clock.reducer';
import itemsReducer from './items.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  tweets: tweetReducer,
  clock: clockReducer,
  cart: itemsReducer
});


export default rootReducer;
