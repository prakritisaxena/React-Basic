import React from 'react';
import {Link} from 'react-router';

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
      <tr>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>
          <Link to={'/' + book.id}>
            View Details
          </Link>
        </td>
        <td>
          <button onClick={() => {
            this.deleteBook(book);
          }}>Delete book
          </button>
        </td>
      </tr>
    )
  }
}