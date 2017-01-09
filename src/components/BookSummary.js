import React from 'react';

export default class BookSummary extends React.Component {

  constructor() {
    super();
    this.viewBookDetails = this.viewBookDetails.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  viewBookDetails(book) {
    this.props.viewBookDetails(book);
  }

  deleteBook(book) {
    this.props.deleteBook(book);
  }

  render() {

    const styles = {};
    const {book} = this.props;

    return (
      <div>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <button onClick={() => {this.viewBookDetails(book);}}>View Details</button>
        <button onClick={() => {this.deleteBook(book);}}>Delete book</button>
      </div>
    )
  }
}