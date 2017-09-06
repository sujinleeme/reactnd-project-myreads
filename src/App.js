import React from 'react'
import {Route} from 'react-router-dom'
import SearchBooks from './Component/Search/SearchBooks'
import MyBookList from './Component/MyBookList/MyBookList'
import * as BooksAPI from './utils/BooksAPI'
import './style/App.css'

class BooksApp extends React.Component {
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
      this.setState({books})
    })
      .then(() => {
        this.setBooksonShelves();
      })
  }

  componentDidMount() {
    this.initShelves()
    console.log('update!!!');
  }

  filterBooksbyShelfTitle(books, title) {
    return books.filter(book => book.shelf === title)
  }

  setBooksonShelves() {
    const allBooks = this.state.books;
    const titles = this.state.shelvesTitles;
    return titles.map((title) => {
      return this.setState({[title]: this.filterBooksbyShelfTitle(allBooks, title)})
    })
  }

  render() {
    const state = this.state
    return (
      <div className="app">
        <Route exact path='/' render={props => <MyBookList
          myBooks={state.books}
          currentlyReading={state.currentlyReading}
          wantToRead={state.wantToRead}
          read={state.read}
          updateShelfTitle={state.updateShelfTitle}
          initShelves={this.initShelves}
          {...props}/>}/>
        <Route path='/search' render={props => <SearchBooks
          myBooks={state.books}
          initShelves={this.initShelves}
          {...props}/>}/>
      </div>
    )
  }
}

export default BooksApp
