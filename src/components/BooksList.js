import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {
  fetchAllBooks
} from '../actions/';

export class BooksList extends React.Component {

  constructor(props) {
    super(props);
    this.addBook = this.addBook.bind(this);
    this.updateValue = this.updateValue.bind(this);

    this.state = {
      book: {
        title: '',
        author: '',
        noOfPages: '',
        description: ''
      }
    };
  }

  componentDidMount() {
    this.props.fetchAllBooks();
  }

  addBook() {

  }

  updateValue(e) {

    let state = this.state;
  }

  render() {

    return (
      <div>
          <div>
            <input type="text" placeholder="Enter title" onChange={this.updateValue} name="title"/>
            <input type="text" placeholder="Enter Author" onChange={this.updateValue} name="author"/>
            <input type="text" placeholder="Enter Description" onChange={this.updateValue} name="description"/>
            <input type="text" placeholder="Enter No. of Pages" onChange={this.updateValue} name="noOfPages"/>
            <button onClick={this.addBook}>Add Book</button>
          </div>
        {
          this.props.booksData.books && this.props.booksData.books.length ?
            books.map((book) => {
              <BookSummary book={book}/>
            }) :

            <div>
              <p>Welcome to TTN Library</p>
              <p>Currently there are no books</p>
            </div>
            }
      </div>
    );
  }
}

let BooksListComponent = connect((state) => state, (dispatch) => {
  return {
    fetchAllBooks() {
      dispatch(fetchAllBooks());
    }
  }
})(BooksList);

export default BooksListComponent;