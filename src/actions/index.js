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
  EDIT_BOOK_DETAILS,
  API_URL
} from '../constants';

import fetch from 'isomorphic-fetch';

export function addBook() {
  return {
    type: ADD_BOOK
  }
}
export function removeBook() {
  return {
    type: REMOVE_BOOK
  }
}
export function searchBook() {
  return {
    type: SEARCH_BOOK
  }
}
export function viewBookDetails() {
  return {
    type: VIEW_BOOK_DETAILS
  }
}
export function editBookDetails() {
  return {
    type: EDIT_BOOK_DETAILS
  }
}

export function fetchAllBooks() {

  console.log('Fetch All Books called');

  return (dispatch) => {
    fetch(API_URL)
      .then((response) => {
        let json = response.json();
        console.log("First then block: ", json);
        return json;
      })
      .then((json) => {
        console.log("Second then block ", json);
        dispatch(fetchBooksSuccess(json));
      })
      .catch((e) => {
        console.log('Fetch books failed', e);
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
      .then((response) => {
        console.log('Inside then block of add book response: ', response);
        // return response.json();
      })
      .then(json => {
        console.log('Add book success');
        dispatch(addBookSuccess(json));
      })
      .catch(e => {
        console.log('Add book failed');
        dispatch(addBookFailed(e));
      })
  };
}

function addBookSuccess(newBook) {

  console.log("Inside add book success action: ", newBook);
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

export function updateBookDetails() {
  return ((dispatch) => {
    fetch(API_URL, {
      method: 'PUT',

    })
  });
}

export function deleteBook(book) {
  return (dispatch => {
    fetch(API_URL)
  });
}