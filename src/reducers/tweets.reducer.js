import {
  ADD_TWEET,
  REMOVE_TWEET
} from '../constants';

const initialTweets = [1, 2, 3, 4];
const tweetsReducer = (state = initialTweets, action) => {

  switch (action.type) {
    case ADD_TWEET:
      return [...state, action.tweet];

    case REMOVE_TWEET: {
      let newTweetsState = [].concat(state);
      newTweetsState.pop();
      return newTweetsState;
    }

  }

  return state;
};

export default tweetsReducer;
