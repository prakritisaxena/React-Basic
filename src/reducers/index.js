import {combineReducers} from 'redux';
import userReducer from './user.reducer';
import tweetReducer from './tweets.reducer';
import clockReducer from './clock.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  tweets: tweetReducer,
  clock: clockReducer
});


export default rootReducer;
