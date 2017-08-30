import React from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './Component/Search/SearchBooks'
import MyBookList from './Component/MyBookList/MyBookList'
import './style/App.css'

class BooksApp extends React.Component {
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
