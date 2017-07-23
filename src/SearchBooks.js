import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'

class SearchBooks extends React.Component {

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: ''})
    console.log
  }

  onSearch = (keyword, count) => {
    BooksAPI.search(keyword, count).then((books) => {
      this.setState({ books })
      console.log(this.state.books);
    })
    
  }

  render() {

    let showingBooks = this.state.books
    const { query } = this.state.query
    if (query) {
      showingBooks = showingBooks
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
              onKeyPress={(event) => {(event.key === 'Enter' ? this.onSearch(query, 20) : null)}}
              placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.length === 0 ? (
              <p>No Results</p>
            ) : (
              <li>Yay! Have Result!</li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
