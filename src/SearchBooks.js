import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'
import SearchInput from './SearchInput'
import BookShelfItem from './BookShelfItem'
import BookShelf from './BookShelf'


class SearchBooks extends React.Component {
  constructor(props) {
    super(props);
        
    this.state = {
      query: '',
      books: []
    }

    this.updateQuery = this.updateQuery.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

  updateQuery = (e) => {
    this.setState({ query: e.target.value.trim() })
  }

  clearQuery = () => {
    this.setState({ query: ''})
  }

  onSearch = (e) => {
    const results = 20;
    if (e.key === 'Enter') {
      e.preventDefault()
      return this.getResultsBooks(this.state.query, results)
    }
  }

  getResultsBooks = (keyword, count) => {
    BooksAPI.search(keyword, count).then((books) => {
      this.setState({ books })
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
          <a className="close-search"
            onClick={() => this.setState({ showSearchPage: false })}>
            Close
          </a>
          <div className="search-books-input-wrapper">
            <SearchInput
              content={query}
              controlFunc={this.updateQuery}
              handelKeyPress={this.onSearch}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books && this.state.books.length > 0 ? (
              <div>
                <BookShelf bookList={this.state.books} title="Result" />
              </div> ) : (
              <p>No Book Found :(</p>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
