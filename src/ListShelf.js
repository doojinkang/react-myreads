import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { BOOKSHELF_TITLES } from './ListBooks'
const BOOK_OPTIONS = ['currentlyReading', 'wantToRead', 'read', 'none']

class ListShelf extends Component {

  bookOptionChange = (event) => {
    console.log(event.target.name, event.target.value)
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
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
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
