import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import * as BooksAPI from '../utils/BooksAPI'
import Autocomplete from './Autocomplete'
import Info from './Info'
import BookShelfContainer from '../BookShelf/BookShelfContainer'

class SearchBooks extends React.Component {
  constructor(props) {
    super(props);
        
    this.state = {
      showList: false,
      query: '',
      books: [],
      highlightedValue: '',
      inputValue: '',
      resultNum: 20,
      keyword: ''
    }

    this.updateQuery = this.updateQuery.bind(this)
    this.handelKeyPress = this.handelKeyPress.bind(this)
    this.changeInputValue = this.changeInputValue.bind(this)
    this.handleKeywordChange = this.handleKeywordChange.bind(this)
  }
  
  updateQuery = (e) => {
    let word;
    e.target ? word = e.target.value : word = e
    this.setState({ query: word})
    this.setState({ inputValue: word })
  }

  trimQuery = () => {
    this.setState({ query: this.state.query.trim() })
    this.setState({ inputValue: this.state.inputValue.trim() })
    this.setState({ keyword: this.state.inputValue})
  }

  changeInputValue = (e) => {
    e.target.value = this.state.highlightedValue
    this.updateQuery(e)    
  }

  handelKeyPress = (e) => {
    let code = (e.keyCode ? e.keyCode : e.which);
    switch (code) {
      default: 
        break

      case 13: // enter
        e.preventDefault()
        this.onSearchBooks()
        break
        
      case 32:  // space
        return false
    }
  }

  onSearchBooks = () => {
    const keyword = this.state.query
    const count = this.state.resultNum
    this.trimQuery()
    this.setState({showList: true})
    BooksAPI.search(keyword, count).then((books) => {
      this.setState({ books })
    })
  }

  handleKeywordChange = (itemValue) => {
    this.setState({ highlightedValue: itemValue })
  }
  
  getSpecificNotification = (text) => ({
    info: <Info text={text} />,
    notFound: <Info text={text} />,
    found: <Info text={text} />,
  });

  notification = ({state, text}) => {
    return (
      <div>
        {this.getSpecificNotification(text)[state]}
      </div>
  );
  }
  
  notFoundMessage() {
    return this.notification({state:'info', text:'Sorry, No Book Found T.T'})
  }

  initMessage() {
    return this.notification({state:'info', text:'Search What you want to read'})
  }

  
  
  render() {
    const list = this.state.books
    const isInit = !this.state.showList
    const isEmpty = !list.length
    const keyword = this.state.keyword

    return (
      <div id="search">
        <div className="close-search">
          <Link
            to='/'
            className="close-search"
          />
          
          </div>
          <div className="search-wrap">
            <Autocomplete
              className="search-bar"
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
        <div className="search-books-results">
        <ol className="books-grid">
          {isInit ? this.initMessage() :
            (isEmpty ? this.notFoundMessage()
            : <BookShelfContainer bookList={list} title={`Result: ${keyword}`} />
            )
          }
        </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks

