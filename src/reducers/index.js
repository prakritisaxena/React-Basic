import {combineReducers} from 'redux';
import userReducer from './user.reducer';
import tweetReducer from './tweets.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  tweets: tweetReducer
});


export default rootReducer;
