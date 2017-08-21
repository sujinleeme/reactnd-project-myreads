import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import BookShelfContainer from './BookShelf/BookShelfContainer'

class MyBookList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shelvesTitles: ["wantToRead", "currentlyReading", "read"],
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
      updateShelfTitle: ''
    }
    this.initShelves = this.initShelves.bind(this)
  }
  
  initShelves() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
    .then(()=> {
      this.setBooksonShelves();
    })
  }

  componentDidMount() {
    this.initShelves()
  }

  filterBooksbyShelfTitle(books, title) {
    return books.filter(book => book.shelf === title)
  }

  setBooksonShelves(){
    const allBooks = this.state.books;
    const titles = this.state.shelvesTitles;
    return titles.map((title) => {
      return this.setState({[title]: this.filterBooksbyShelfTitle(allBooks, title)}) 
    })
  }

  render() {
    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelfContainer updateShelf={this.initShelves} bookList={this.state.currentlyReading} title="Currently Reading" />
              <BookShelfContainer updateShelf={this.initShelves} bookList={this.state.wantToRead} title="Want To Read" />
              <BookShelfContainer updateShelf={this.initShelves} bookList={this.state.read} title="Read Done" />
            </div>
            <div className="open-search">
            <Link
              to='/search'
            >Add a book</Link>
            </div>
      </div>
    )
  }

}

export default MyBookList;
