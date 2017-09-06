import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../../utils/BooksAPI'
import * as Common from '../../utils/Common'
import Autocomplete from './Autocomplete/Autocomplete'
import Info from '../Notification/Info'
import BookShelfContainer from '../BookShelf/BookShelfContainer'

class SearchBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
      query: "",
      books: [],
      highlightedValue: "",
      inputValue: "",
      resultNum: 20,
      keyword: "",
      showAutoComplete: false
    }

    this.onAutoComplete = this.onAutoComplete.bind(this)
    this.offAutoComplete = this.offAutoComplete.bind(this)
    this.updateQuery = this.updateQuery.bind(this)
    this.handelKeyPress = this.handelKeyPress.bind(this)
    this.changeInputValue = this.changeInputValue.bind(this)
    this.handleKeywordChange = this.handleKeywordChange.bind(this)
    this.onSearchBooks = this.onSearchBooks.bind(this)
  }

  onAutoComplete = () => {
    if (!this.state.showAutoComplete) {
      this.setState({showAutoComplete: true})
    }
  }

  offAutoComplete = () => {
    if (this.state.showAutoComplete) {
      this.setState({showAutoComplete: false})
      this.handleKeywordChange('')
    }
  }

  updateQuery = (e) => {
    let word;
    e.target ? word = e.target.value : word = e
    this.setState({query: word})
    this.setState({inputValue: word})
  }

  trimQuery = () => {
    this.setState({query: this.state.query.trim()})
    this.setState({inputValue: this.state.inputValue.trim()})
    this.setState({keyword: this.state.inputValue})
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
    this.setState({showResult: true})
    BooksAPI.search(keyword, count).then((books) => {
      this.setState({books})
    })
  }

  handleKeywordChange = (itemValue) => {
    this.setState({highlightedValue: itemValue})
  }

  getSpecificNotification = (text) => ({
    info: <Info text={text}/>,
    notFound: <Info text={text}/>,
    found: <Info text={text}/>,
  })

  notification = ({state, text}) => {
    return (
      <div className="search-result-msg">
        {this.getSpecificNotification(text)[state]}
      </div>
    );
  }

  notFoundMessage = () => {
    return this.notification({state: 'info', text: 'Sorry, No Book Found T.T'})
  }

  initMessage = () => {
    return this.notification({state: 'info', text: 'Search What you want to read'})
  }

  render() {
    const props = this.props
    const list = this.state.books
    const isInit = !this.state.showResult
    const isEmpty = !this.state.books
    const keyword = Common.capitalizeTitle(this.state.keyword)
    const myBooks = this.props.myBooks
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
            showAutoComplete={this.state.showAutoComplete}
            inputValue={this.state.inputValue}
            updateQuery={this.updateQuery}
            changeInputValue={this.changeInputValue}
            handelKeyPress={this.handelKeyPress}
            onSearchBooks={this.onSearchBooks}
            onSelectItem={this.handleKeywordChange}
            onAutoComplete={this.onAutoComplete}
            offAutoComplete={this.offAutoComplete}
            placeholder="Search by title or author"
          />
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {isInit ? this.initMessage() :
              (isEmpty ? this.notFoundMessage()
                  : <BookShelfContainer
                      myBooks={myBooks}
                      bookList={list}
                      title={`Result: ${keyword}`}
                      updateShelf={props.initShelves}
                    />
              )
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks

