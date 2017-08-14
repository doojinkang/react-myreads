import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {

  state = {
    books : [],
    searchBooks: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then( (books) => {
      console.log('API.getAll', books.length)
      this.setState( {books} )
    })
  }

  handleChange = (id, shelf) => {
    let newBooks = [...this.state.books]
    const thatBook = newBooks.filter( (book) => book.id === id )[0]
    // console.log(thatBook.id, thatBook.title, thatBook.shelf)

    BooksAPI.update(thatBook, shelf).then ( (res) => {
      // console.log(res)
      thatBook.shelf = shelf
      this.setState ( {
        books: newBooks
      })
    })
  }

  updateQuery = (query) => {
    this.setState( { query })
    console.log('updateQuery', query)
    BooksAPI.search(query, 10).then( (books) => {
      this.setState( {
        searchBooks: books
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render= { () => (
          <SearchBooks
            books={this.state.searchBooks}
            query={this.state.query}
            updateQuery={this.updateQuery}
          />
        )} />
        <Route exact path='/' render= { () => (
          <ListBooks
            books={this.state.books}
            handleChange={this.handleChange}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
