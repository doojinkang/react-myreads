import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { BOOK_READING, BOOK_WANNA_READ, BOOK_READ, BOOK_NONE, BOOKSHELF_TITLES } from './ListBooks'
const BOOK_OPTIONS = ['currentlyReading', 'wantToRead', 'read', 'none']

class ListShelf extends Component {

  bookOptionChange = (event) => {
    this.props.bookShelfChange(
      event.target.name,
      parseInt(event.target.value, 10)
    )
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{BOOKSHELF_TITLES[this.props.shelf]}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

            {this.props.books.filter( (book) => (book.shelf === this.props.shelf))
                  .map( (book) => (
              <li key={book.title}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: book.width, height: book.height, backgroundImage: `url("${book.cover}")` }}></div>
                    <div className="book-shelf-changer">
                      <select name={book.title}
                              value={BOOK_OPTIONS[book.shelf]}
                              onChange={this.bookOptionChange}>
                        <option value="none" disabled>Move to...</option>
                        <option value={BOOK_READING}>Currently Reading</option>
                        <option value={BOOK_WANNA_READ}>Want to Read</option>
                        <option value={BOOK_READ}>Read</option>
                        <option value={BOOK_NONE}>None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.author}</div>
                </div>
              </li>
            ))}

          </ol>
        </div>
      </div>
    )
  }
}

export default ListShelf
