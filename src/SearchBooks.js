import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState( {query: query.trim() })
    if ( query)
      this.props.updateQuery(query)
  }

  render() {
    console.log('searchBooks render', this.props.books.length)
    return (
      <div className="search-books">
        <div className="search-books-bar">

          <Link
            to='/'
            className='close-search'
          >Close</Link>
          
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={ (event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">

          <ol className="books-grid">

            { this.props.books.map( (book) => {
                book.width = 128
                book.height = 170
                return (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover"
                           style={{ width: book.width, height: book.height,
                                    backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : ''}")`
                                 }}>
                      </div>
                      <div className="book-shelf-changer">
                        <select name={book.title}
                                value={book.shelf ? book.shelf : "none"}
                                onChange={this.bookOptionChange}>
                          <option value="" disabled>Move to...</option>
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
                )
              })
            }
            
          </ol>

        </div>
      </div>
    )
  }

}

export default SearchBooks
