import {
  CHANGE_AGE,
  CHANGE_NAME,
  ADD_TWEET,
  REMOVE_TWEET,
  FETCH_TWEET_FAILED,
  FETCH_TWEET_STARTED,
  FETCH_TWEET_SUCCESS,
  UPDATE_TIME
} from '../constants';

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name
  }
}

export function changeAge(age) {
  return {
    type: CHANGE_AGE,
    age
  }
}


export function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet
  }
}


export function removeTweet() {
  return {
    type: REMOVE_TWEET
  }
}


export function fetchTweetsStarted() {
  return {
    type: FETCH_TWEET_SUCCESS
  }
}

export function fetchTweetsSuccess(tweets) {
  return {
    type: FETCH_TWEET_SUCCESS,
    tweets
  }
}

export function fetchTweetsFailed() {
  return {
    type: FETCH_TWEET_FAILED
  }
}
export function fetchTweets() {
  return (dispatch) => {
    console.log("Fetch tweets called");
    dispatch(fetchTweetsStarted());
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        return response.json();
      })
      .then(json => {
        console.log(json, "Tweets found");
        dispatch(fetchTweetsSuccess(json))
      })
      .catch((e) => {
        console.log("Error fetching tweets", e);
        dispatch(fetchTweetsFailed());
      });
  }
}

export function updateTime() {
  return {
    type: UPDATE_TIME,
    time: new Date()
  }
}
