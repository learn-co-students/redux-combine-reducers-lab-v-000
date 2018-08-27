import React, {Component} from 'react';
import {addBook} from './actions.js'
import {addRecommendedBook} from './actions.js'
import {removeBook} from './actions.js'
import {removeRecommendedBook} from './actions.js'


export default class App extends Component {

  render(){
    const books = this.props.books.map(book => <li> {book.title}</li> )
    return(
      <div>
        <ul>
        {books}
        </ul>

      </div>


    )
  }


};
