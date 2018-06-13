import React, { Component } from 'react';
import BooksInput from './components/BookInput';
import Books from './components/Books';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BooksInput />
        <Books />
      </div>
    )
  }
}
