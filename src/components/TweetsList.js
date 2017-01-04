import React from 'react';

const TweetsList = ({tweets}) => {
  return (
    <ul>
      {
        tweets.map((tweet, index) => <li key={index}>{tweet}</li>)
      }
    </ul>
  )
};

export default TweetsList;
