import {combineReducers} from 'redux';
import {
  FETCH_ALL_BOOKS,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILED,
  ADD_BOOK,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILED,
  REMOVE_BOOK,
  SEARCH_BOOK,
  VIEW_BOOK_DETAILS,
  EDIT_BOOK_DETAILS
} from '../constants';


let initialState = {
  books: [],
  newBook: {}
};

const booksReducer = function (state = initialState, action) {
  switch(action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {...state, books: action.data};
    case ADD_BOOK_SUCCESS:
      let newBooksList = [].concat(state.books);
      newBooksList.push(action.newBook);
      return {...state, books: newBooksList};
  }
  return state;
};

const rootReducer = combineReducers({
  booksData: booksReducer
});

export default rootReducer;