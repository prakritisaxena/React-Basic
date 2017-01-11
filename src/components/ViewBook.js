import React from 'react';
import {connect} from 'react-redux';
import {viewBookDetails} from '../actions';
import {EditBook} from './EditBook';
import {Link} from 'react-router';

class ViewBookComponent extends React.Component {

  componentDidMount() {
    let id = this.props.routeParams && this.props.routeParams.id;
    this.props.viewBookDetails(id);
  }

  render() {
    return (this.props.booksData.currentBook ? <div>
        <h2>{this.props.booksData.currentBook.title}</h2>
        <img src={this.props.booksData.currentBook.image} alt="Image not found"/>
        <p>{this.props.booksData.currentBook.description}</p>
        <p>{this.props.booksData.currentBook.author}</p>
        <p>{this.props.booksData.currentBook.noOfPages}</p>
        <Link to={"/" + this.props.booksData.currentBook.id + "/edit"} params={{bookToBeEdited: this.props.booksData.currentBook}} component={EditBook}>Edit Details</Link>
      </div> : null);
  }


}

const ViewBook = connect((state) => {
  return state;
}, dispatch => {
  return {
    viewBookDetails(id) {
      dispatch(viewBookDetails(id));
    }
  }
})(ViewBookComponent);

export default ViewBook;