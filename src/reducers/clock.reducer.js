import {
  UPDATE_TIME
} from '../constants';

const initialState = {time: new Date()};

const clockReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_TIME: {
      console.log('Inside UPDATE_TIME action, time is: ' + action.time);
      return {...state, time: action.time};
    }
  }

  return state;
};

export default clockReducer;
