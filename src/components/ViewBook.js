import React from 'react';
import {connect} from 'react-redux';
import {EditBook} from './EditBook';

class ViewBookComponent extends React.Component {

  render() {
    let book = this.getCurrentBook(this.props.routeParams && this.props.routeParams.id);

    return (book ? <div>
        <h2>{book.title}</h2>
        <img src={book.image} alt="Image not found"/>
        <p>{book.description}</p>
        <p>{book.author}</p>
        <p>{book.noOfPages}</p>
        <Link to={"/" + book.id + "/edit"} component={EditBook}>Edit Details</Link>
      </div> : null);
  }

  getCurrentBook(id) {
    console.log('getcurrentbook', id);
    let booksData = this.props.booksData;

    for (let i = 0; i < booksData.length; i++) {
      if(booksData[i].id === id) {
        return booksData[i];
      }
    }
  }
}

const ViewBook = connect((state) => {
  return state;
})(ViewBookComponent);

export default ViewBook;