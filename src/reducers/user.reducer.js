import {
  CHANGE_AGE,
  CHANGE_NAME
} from '../constants';

const initialState = {
  name: 'Kapil',
  age: 25
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_AGE: {
      console.log('Change age called');
      return {...state, age: action.age};
    }
    case CHANGE_NAME: {
      console.log('Change name called');
      return {...state, name: action.name};
    }
  }

  return state;
};

export default usersReducer;
