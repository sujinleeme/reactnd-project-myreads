import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './Search/SearchBooks'
import MyBookList from './MyBookList'
import * as BooksAPI from './utils/BooksAPI'


import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

   
  
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={MyBookList} />
        <Route path='/search' component={SearchBooks} />
          


      </div>
    )
  }
}

export default BooksApp
