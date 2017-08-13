import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListShelf from './ListShelf'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
  }

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
            <ListShelf
              books={this.props.books}
              shelf='currentlyReading'
              shelfTitle='Currently Reading'
              bookShelfChange={this.handleChange}
            />
            <ListShelf
              books={this.props.books}
              shelf='wantToRead'
              shelfTitle='Want to Read'
              bookShelfChange={this.handleChange}
            />
            <ListShelf
              books={this.props.books}
              shelf='read'
              shelfTitle='Read'
              bookShelfChange={this.handleChange}
            />
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
