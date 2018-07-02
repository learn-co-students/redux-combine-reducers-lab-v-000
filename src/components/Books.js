import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Books extends Component {

  render() {

    let books = this.props.books.map((book, index) => <li key={index}>{book.name}</li>);

    return (
      <div>
        <ul>
          {books}
        </ul>
      </div>
    );
  }
};

function mapStateToProps(state){
  return {books: state.books}
}

export const ConnectedBooks = connect(mapStateToProps)(Book);