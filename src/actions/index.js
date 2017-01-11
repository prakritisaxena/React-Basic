import {
  FETCH_ALL_BOOKS,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILED,
  ADD_BOOK,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILED,
  DELETE_BOOK,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAILED,
  SEARCH_BOOK,
  VIEW_BOOK_DETAILS,
  VIEW_BOOK_DETAILS_SUCCESS,
  VIEW_BOOK_DETAILS_FAILED,
  UPDATE_BOOK_DETAILS,
  UPDATE_BOOK_DETAILS_SUCCESS,
  UPDATE_BOOK_DETAILS_FAILED,
  API_URL
} from '../constants';

import fetch from 'isomorphic-fetch';

export function addBook() {
  return {
    type: ADD_BOOK
  }
}

export function searchBook() {
  return {
    type: SEARCH_BOOK
  }
}
export function viewBookDetails(id) {
  console.log('View books action called', id);
  return ((dispatch) => {
    fetch(API_URL + "/" + id)
      .then(response => {
        return response.json();
      })
      .then((json) => {
        dispatch(viewBookDetailsSuccess(json));
      })
      .catch(e => {
        dispatch(viewBookDetailsFailed(e));
      })
  });
}

export function viewBookDetailsSuccess(book) {
  return {
    type: VIEW_BOOK_DETAILS_SUCCESS,
    book
  }
}

export function viewBookDetailsFailed(error) {
  return {
    type: VIEW_BOOK_DETAILS_FAILED,
    error
  }
}

export function fetchAllBooks() {

  return (dispatch) => {
    fetch(API_URL)
      .then(response => response.json())
      .then((json) => {
        dispatch(fetchBooksSuccess(json));
      })
      .catch((e) => {
        dispatch(fetchBooksFailed(e));
      });
  }
}

export function fetchBooksSuccess(data) {
  return {
    type: FETCH_BOOKS_SUCCESS,
    data
  };
}

export function fetchBooksFailed(error) {
  return {
    type: FETCH_BOOKS_FAILED,
    error
  }
}


export function addNewBook(book) {
  return (dispatch) => {
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
      .then(response => response.json())
      .then(json => {
        dispatch(addBookSuccess(json));
      })
      .catch(e => {
        dispatch(addBookFailed(e));
      })
  };
}

function addBookSuccess(newBook) {

  return {
    type: ADD_BOOK_SUCCESS,
    newBook
  };
}

function addBookFailed(error) {
  return {
    type: ADD_BOOK_FAILED,
    error
  };
}

export function updateBookDetails(book) {
  return ((dispatch) => {
    fetch(API_URL, {
      method: 'PUT',
      body: book
    })
      .then(response => response.json())
      .then(json => {
        dispatch(updateBookDetailsSuccess(json));
      })
      .catch(e => {
        dispatch(updateBookDetailsFailed(e))
      });
  });
}

export function updateBookDetailsSuccess(book) {
  return {
    type: UPDATE_BOOK_DETAILS_SUCCESS,
    book
  };
}


export function updateBookDetailsFailed(e) {
  return {
    type: UPDATE_BOOK_DETAILS_FAILED,
    e
  };
}

export function deleteBook(book) {
  return (dispatch => {
    fetch(API_URL + "/" + book.id, {
      "method": "DELETE"
    })
      .then(() => {
        dispatch(deleteBookSuccess(book));
      })
      .catch(e => {
        dispatch(deleteBookFailed(e));
      })
  });
}

export function deleteBookSuccess(book) {
  return {
    type: DELETE_BOOK_SUCCESS,
    book
  }
}

export function deleteBookFailed(error) {
  return {
    type: DELETE_BOOK_FAILED,
    error
  }
}