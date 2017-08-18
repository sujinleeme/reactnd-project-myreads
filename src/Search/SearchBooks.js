import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../App.css'
import * as BooksAPI from '../utils/BooksAPI'
import Autocomplete from './Autocomplete'
import BookShelf from '../Bookshelf/BookShelf'
import { Route } from 'react-router-dom'



class SearchBooks extends React.Component {
  constructor(props) {
    super(props);
        
    this.state = {
      query: '',
      books: [],
      highlightedValue: '',
      inputValue: '',
      resultNum: 20
    }

    this.updateQuery = this.updateQuery.bind(this)
    this.handelKeyPress = this.handelKeyPress.bind(this)
    this.changeInputValue = this.changeInputValue.bind(this)
    this.handleKeywordChange = this.handleKeywordChange.bind(this)
  }

  updateQuery = (e) => {
    let word;
    if (e.target){
      word = e.target.value
    }
    else {
      word = e;
    }

    this.setState({ query: word})
    this.setState({ inputValue:  word })
  }

  trimQuery = () => {
    this.setState({ query: this.state.query.trim() })
    this.setState({ inputValue: this.state.inputValue.trim() })
  }

  changeInputValue = (e) => {
    e.target.value = this.state.highlightedValue
    this.updateQuery(e)    
  }

  handelKeyPress = (e) => {
    let code = (e.keyCode ? e.keyCode : e.which);
    switch (code) {
      case 13: // enter
        e.preventDefault()
        this.trimQuery()
        this.onSearchBooks(this.state.query, this.state.resultNum)
        break
      case 32:  // space
        return false
        
    }

  }

  onSearchBooks = (keyword, count) => {
    BooksAPI.search(keyword, count).then((books) => {
      this.setState({ books })
    })
  }

  handleKeywordChange = (itemValue) => {
    this.setState({ highlightedValue: itemValue })
    this.setState({ inputValue: itemValue });
  }

  render() {
    return (
      <div className="search-books">

        <div className="search-books-bar">
          <div className="close-search">
          <Link
                to='/'
                className="close-search"
          />
          </div>
          
          <div className="search-books-input-wrapper">
            <Autocomplete
              highlightedValue={this.state.highlightedValue}
              query={this.state.query}
              inputValue={this.state.inputValue}
              controlFunc={this.updateQuery}
              changeInputValue={this.changeInputValue}
              handelKeyPress={this.handelKeyPress}
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
