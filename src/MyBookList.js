import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import BookShelf from './BookShelf/BookShelf'

class MyBookList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      shelvesTitles: ['currentlyReading', 'wantToRead','read'],
      currentlyReading: [],
      wantToRead: [],
      read: []
    }


    this.filterBooksbyShelfTitle = this.filterBooksbyShelfTitle.bind(this)
    this.setBooksonShevles = this.setBooksonShevles.bind(this)
  }
  

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
    .then(()=>
      {
        this.setBooksonShevles();
      }
    )
  }

  filterBooksbyShelfTitle(books, title) {
    return books.filter(book => book.shelf === title)
  }

  setBooksonShevles(){
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
              <div>
                <BookShelf bookList={this.state.currentlyReading} title="Currently Reading" />
                <BookShelf bookList={this.state.wantToRead} title="Want To Read" />
                <BookShelf bookList={this.state.read} title="Read Done" />
              </div>
            </div>
            <div className="open-search">
            <Link
                to='/search'
                onClick={() => this.setState({ showSearchPage: true })}
              >Add a book</Link>
            </div>
          </div>
    )
    

  }

}

export default MyBookList;
