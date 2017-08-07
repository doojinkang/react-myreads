import React, { Component } from 'react'
import PropTypes from 'prop-types'

const bookshelfReading = [
	{
		cover: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
		width: 128,
		height: 193,
		title: "To Kill a Mockingbird",
		author: "Harper Lee"
	},
	{
		cover: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
		width: 128,
		height: 188,
		title: "Ender's Game",
		author: "Orson Scott Card"
	}
]

const bookshelfWant = [
	{
		cover: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
		width: 128,
		height: 193,
		title: "1776",
		author: "David McCullough"
	},
	{
		cover: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
		width: 128,
		height: 192,
		title: "Harry Potter and the Sorcerer's Stone",
		author: "J.K. Rowling"
	}
]

const bookshelfRead = [
	{
		cover: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
		width: 128,
		height: 192,
		title: "The Hobbit",
		author: "J.R.R. Tolkien"
	},
	{
		cover: "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
		width: 128,
		height: 174,
		title: "Oh, the Places You'll Go!",
		author: "Seuss"
	},
	{
		cover: "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
		width: 128,
		height: 192,
		title: "The Adventures of Tom Sawyer",
		author: "Mark Twain"
	}
]

class ListBooks extends Component {

    render() {
			return (
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						<div>
							<div className="bookshelf">
								<h2 className="bookshelf-title">Currently Reading</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">

										{bookshelfReading.map( (book) => (
											<li>
												<div className="book">
													<div className="book-top">
														<div className="book-cover" style={{ width: book.width, height: book.height, backgroundImage: `url("${book.cover}")` }}></div>
														<div className="book-shelf-changer">
															<select>
																<option value="none" disabled>Move to...</option>
																<option value="currentlyReading" selected>Currently Reading</option>
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
							<div className="bookshelf">
								<h2 className="bookshelf-title">Want to Read</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">

										{bookshelfWant.map( (book) => (
											<li>
												<div className="book">
													<div className="book-top">
														<div className="book-cover" style={{ width: book.width, height: book.height, backgroundImage: `url("${book.cover}")` }}></div>
														<div className="book-shelf-changer">
															<select>
																<option value="none" disabled>Move to...</option>
																<option value="currentlyReading" selected>Currently Reading</option>
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
							<div className="bookshelf">
								<h2 className="bookshelf-title">Read</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">

										{bookshelfRead.map( (book) => (
											<li>
												<div className="book">
													<div className="book-top">
														<div className="book-cover" style={{ width: book.width, height: book.height, backgroundImage: `url("${book.cover}")` }}></div>
														<div className="book-shelf-changer">
															<select>
																<option value="none" disabled>Move to...</option>
																<option value="currentlyReading" selected>Currently Reading</option>
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
						</div>
					</div>
					<div className="open-search">
						<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
					</div>
				</div>
		)
	}
}

export default ListBooks
