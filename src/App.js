import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

export const BOOK_OPTIONS = ['currentlyReading', 'wantToRead', 'read', 'none']

class BooksApp extends React.Component {

  state = {
    books : []
  }

  componentDidMount() {
    BooksAPI.getAll().then( (books) => {
      this.setState( {books} )
    })
  }

  handleChange = (id, shelf) => {
    // const thatBook = this.state.books.filter( (book) => book.id === id )
    // console.log(thatBook[0].id, thatBook[0].title, thatBook[0].shelf)
    let newBooks = this.state.books
    // console.log(newBooks)
    if ( shelf === "" ) {
      newBooks = this.state.books.filter( (book) => book.id !== id)
    }
    else {
      newBooks.forEach((book) => {
        if (book.id === id)
          book.shelf = shelf
      })
    }
    this.setState ( {
      books: newBooks
    })
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render= { () => (
          <SearchBooks />
        )} />
        <Route exact path='/' render= { () => (
          <ListBooks books={this.state.books} handleChange={this.handleChange}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
