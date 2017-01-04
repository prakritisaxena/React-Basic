import {
  ADD_TWEET,
  REMOVE_TWEET,
  FETCH_TWEET_FAILED,
  FETCH_TWEET_SUCCESS,
  FETCH_TWEET_STARTED
} from '../constants';

const initialState = {
  tweets: [1, 2, 3, 4],
  loading: false
};

const tweetsReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_TWEET: {
      let newTweets = [].concat(state.tweets);
      newTweets.push(action.tweet);
      return { ...state, tweets: newTweets };
    }
    case FETCH_TWEET_STARTED: {
      return {...state, loading: true};
    }
    case FETCH_TWEET_FAILED: {
      return {...state, loading: false};
    }
    case FETCH_TWEET_SUCCESS: {
      console.log(`Inside fetch-tweet-success reducer `, state.tweets);
      let newTweets = [].concat(state.tweets).concat(action.tweets.map((tweet) => {
        return tweet.name;
      }));
      return {...state, loading: false, tweets: newTweets}
    }
    case REMOVE_TWEET: {
      let newTweetsState = [].concat(state.tweets);
      newTweetsState.pop();
      return newTweetsState;
    }
  }
  return state;
};

export default tweetsReducer;
