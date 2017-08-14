import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {

  state = {
    books : []
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
