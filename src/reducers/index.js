import {combineReducers} from 'redux';
import {
  FETCH_ALL_BOOKS,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILED,
  ADD_BOOK,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILED,
  DELETE_BOOK,
  DELETE_BOOK_SUCCESS,
  SEARCH_BOOK,
  VIEW_BOOK_DETAILS,
  EDIT_BOOK_DETAILS,
  VIEW_BOOK_DETAILS_SUCCESS,
  VIEW_BOOK_DETAILS_FAILED
} from '../constants';


let initialState = {
  books: [],
  newBook: {},
  currentBook: {}
};

const booksReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {...state, books: action.data};
    case ADD_BOOK_SUCCESS:
      let newBooksList = [].concat(state.books);
      newBooksList.push(action.newBook);
      return {...state, books: newBooksList};
    case DELETE_BOOK_SUCCESS:
      let newList = [].concat(state.books);
      for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === action.book.id) {
          newList.splice(i, 1);
          break;
        }
      }
      return {...state, books: newList};
    case VIEW_BOOK_DETAILS_SUCCESS:
      return {...state, currentBook: action.book};
  }
  return state;
};

const rootReducer = combineReducers({
  booksData: booksReducer
});

export default rootReducer;