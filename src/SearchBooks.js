import React, { Component } from 'react'

import './App.css'
import * as BooksAPI from './utils/BooksAPI'
import * as utils from './utils/Common'
import Autocomplete from './Autocomplete'
import BookShelfItem from './BookShelfItem'
import BookShelf from './BookShelf'


class SearchBooks extends React.Component {
  constructor(props) {
    super(props);
        
    this.state = {
      query: '',
      books: [],
      highlightedValue: '',
      inputValue: ''
    }

    this.updateQuery = this.updateQuery.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.changeInputValue = this.changeInputValue.bind(this)
    this.handleKeywordChange = this.handleKeywordChange.bind(this)
  }

  updateQuery = (e) => {
    console.log(e);
    this.setState({ query:  e.target.value.trim() })
    this.setState({ inputValue:  e.target.value.trim() })
  }

  clearQuery = () => {
    this.setState({ query: ''})
  }

  changeInputValue = (e) => {
    e.target.value = this.state.highlightedValue
    this.updateQuery(e)    
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
  handleKeywordChange = (itemValue) => {
    this.setState({ highlightedValue: itemValue })
    this.setState({ inputValue: itemValue });
  }

  render() {
    let showingBooks = this.state.books
    const { query } = this.state.query
    const { props } = this.props
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
            <Autocomplete
              highlightedValue={this.state.highlightedValue}
              content={this.state.query}
              inputValue={this.state.inputValue}
              controlFunc={this.updateQuery}
              changeInputValue={this.changeInputValue}
              handelKeyPress={this.onSearch}
              onSelectItem={this.handleKeywordChange}
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
