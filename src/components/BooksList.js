import React from 'react';
import {connect} from 'react-redux';
import BookSummary from './BookSummary';
import {browserHistory} from 'react-router';
import {
  fetchAllBooks,
  addNewBook,
  deleteBook,
  viewBookDetails
} from '../actions/';

export class BooksList extends React.Component {

  constructor(props) {
    super(props);
    this.addBook = this.addBook.bind(this);
    this.viewBookDetails = this.viewBookDetails.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
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
    this.props.addNewBook({
      title: this.state.book.title,
      author: this.state.book.author,
      noOfPages: this.state.book.noOfPages,
      description: this.state.book.description
    });
  }

  viewBookDetails(book) {
    this.props.viewBookDetails(book);
  }

  deleteBook(book) {
    this.props.deleteBook(book);
  }

  updateValue(e) {
    let initialData = this.state.book;
    initialData[e.target.name] = e.target.value;
    this.setState(initialData);
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
        {console.log('Inside BooksList template: ', this.props.booksData.books)}
        {
          this.props.booksData.books && this.props.booksData.books.length ?
            this.props.booksData.books.map((book, index) => {
              return <BookSummary book={book} key={index} deleteBook={this.deleteBook}
                                  viewBookDetails={this.viewBookDetails}/>
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
    },
    addNewBook(book) {
      dispatch(addNewBook(book));
    },
    deleteBook(book) {
      dispatch(deleteBook(book));
    },
    viewBookDetails(book) {
      dispatch(viewBookDetails(book));
    }
  }
})(BooksList);

export default BooksListComponent;