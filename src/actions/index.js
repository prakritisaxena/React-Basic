import {
  FETCH_ALL_BOOKS,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILED,
  ADD_BOOK,
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
        console.log("First then block: ", response.json());
        return response.json();
      })
      .then(json => {
        console.log("Second then block ", json);
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

export function createNewBook() {
  return (dispatch) => {
    fetch(API_URL, {
      body: {id: 1, title: 'Alice in Wonderland', author: 'Lewis Caroll', noOfPage: 245}
    })
  };
}
