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
    const book = BooksAPI.get(id).then( (book) => {
      BooksAPI.update(book, shelf).then( (res) => {
        const newBooks = [...this.state.books]
        const thatBook = newBooks.filter( (book) => book.id === id )[0]
        if ( typeof thatBook !== 'undefined') {
          console.log('case exist')
          thatBook.shelf = shelf
        }
        else {
          console.log('case add from search')
          book.shelf = shelf
          newBooks.push(book)
        }
        const newSearchBooks = [...this.state.searchBooks]
        const thatSearchBook = newSearchBooks.filter( (book) => book.id === id)[0]
        if ( typeof thatSearchBook !== 'undefined') {
          thatSearchBook.shelf = shelf
        }

        this.setState ( {
          books: newBooks,
          searchBooks: newSearchBooks
        })
      })
    })
  }

  updateQuery = (query) => {
    query = query.trim()
    this.setState( { query })
    console.log('updateQuery', query)
    if ( query.length > 0 ) {
      BooksAPI.search(query, 20).then( (qBooks) => {
        if ( typeof qBooks !== 'undefined' && typeof qBooks.error === 'undefined') {
          qBooks.forEach( (qBook) => {
            let res = this.state.books.filter((book) => (book.id == qBook.id))
            if (res.length > 0)
              qBook.shelf = res[0].shelf
          })
          this.setState( {
            searchBooks: qBooks
          })
        }
      })
    } else {
      this.setState( {
        searchBooks: []
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render= { () => (
          <SearchBooks
            books={this.state.searchBooks}
            query={this.state.query}
            updateQuery={this.updateQuery}
            handleChange={this.handleChange}
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
