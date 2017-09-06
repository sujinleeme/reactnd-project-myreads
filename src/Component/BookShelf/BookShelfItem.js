import React from 'react'
import BookDetailButton from './BookDetailButton'
import * as utils from '../../utils/Common'

class BookShelfItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      shelfTitle: null
    };
    this.inMyBookList = this.inMyBookList.bind(this)
  }

  getImageLink = (obj) => {
    const imageList = utils.deepCopy(obj.imageLinks)
    if (imageList !== null) {
      return (imageList.smallThumbnail)
    }
  }

  inMyBookList() {
    const myBooks = this.props.myBooks
    const bookID = this.props.id
    const isInMyShelf = myBooks.filter(e => e.id === bookID)
    if (isInMyShelf.length > 0) {
      this.setState({shelfTitle: isInMyShelf[0].shelf})
    }
  }

  componentDidMount() {
    this.inMyBookList()
  }

  render() {
    const book = this.props
    const bookID = this.props.id
    const coverStyle = {
      width: '100%',
      height: '100%',
      backgroundImage: `url(${this.getImageLink(this.props)})`
    }

    return (
      <div className="book">
        <div className="book-top">:
          <div className="book-cover" style={coverStyle}></div>
          <BookDetailButton
            shelf={this.state.shelfTitle}
            updateShelf={this.props.updateShelf}
            book={book}
            bookID={bookID}
          />
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>
    )
  }
}

export default BookShelfItem
