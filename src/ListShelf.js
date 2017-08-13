import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    bookShelfChange: PropTypes.func.isRequired
  }

  bookOptionChange = (event) => {
    this.props.bookShelfChange(
      event.target.name,
      event.target.value
    )
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

          { this.props.books.map( (book) => {
              book.width = 128
              book.height = 170
              return (
              <li key={book.title}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover"
                         style={{ width: book.width, height: book.height,
                                  backgroundImage: `url("${book.imageLinks.thumbnail}")`
                               }}>
                    </div>
                    <div className="book-shelf-changer">
                      <select name={book.title}
                              value={book.shelf}
                              onChange={this.bookOptionChange}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">
                    { book.authors && book.authors.join(" / ") }
                  </div>
                </div>
              </li>
              )}
          )}

          </ol>
          { this.props.books.length === 0 && (
            <div className="book-grid">
              <span> None </span>
            </div>
          )}

        </div>
      </div>
    )
  }
}

export default ListShelf
