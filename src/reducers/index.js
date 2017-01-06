import {combineReducers} from 'redux';
import {
  FETCH_ALL_BOOKS,
  ADD_BOOK,
  REMOVE_BOOK,
  SEARCH_BOOK,
  VIEW_BOOK_DETAILS,
  EDIT_BOOK_DETAILS
} from '../constants';


let initialState = {
  books: []
};

const booksReducer = function (state = initialState, action) {
  switch(action.type) {
    case FETCH_ALL_BOOKS:
      return {...state, books: action.data};
    // case REMOVE_BOOK:
    // case SEARCH_BOOK:
    // case VIEW_BOOK_DETAILS:
    // case EDIT_BOOK_DETAILS:
  }
  return state;
};

const rootReducer = combineReducers({
  booksData: booksReducer
});

export default rootReducer;