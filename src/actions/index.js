import {
  CHANGE_AGE,
  CHANGE_NAME,
  ADD_TWEET,
  REMOVE_TWEET
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


