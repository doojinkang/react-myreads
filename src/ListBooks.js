import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListShelf from './ListShelf'

import { BOOK_READING, BOOK_WANNA_READ, BOOK_READ, BOOK_NONE, BOOKSHELF_TITLES } from './App'

class ListBooks extends Component {

  handleChange = (title, shelf) => {
    this.props.handleChange(title, shelf)
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <ListShelf books={this.props.books} shelf={BOOK_READING}    bookShelfChange={this.handleChange}/>
            <ListShelf books={this.props.books} shelf={BOOK_WANNA_READ} bookShelfChange={this.handleChange}/>
            <ListShelf books={this.props.books} shelf={BOOK_READ}       bookShelfChange={this.handleChange}/>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'></Link>
        </div>
      </div>
		)
	}
}

export default ListBooks
