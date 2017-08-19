import React from 'react'
import BookDetailButton from './BookDetailButton'
import * as utils from '../utils/Common'

const BookStyle = {
  width: 128,
  height: 193
}

class BookShelfItem extends React.Component {

  getImageLink = (obj) => {
    const imageList = utils.deepCopy(obj.imageLinks)
    if(imageList !== null){
      return (imageList.smallThumbnail)
    }
  }
  render() {
    const book = this.props;

    return (
      <div className="book">
      <div className="book-top">
        <div className="book-cover" 
          style={{ 
            width: BookStyle.width,
            height: BookStyle.height,
            backgroundImage: `url(${this.getImageLink(this.props)})`
            }}>
        </div>
        <BookDetailButton book={book}/>
      </div>
      <div className="book-title">{this.props.title}</div>
      <div className="book-authors">{this.props.authors}</div>
      </div>
    )
  }
}

export default BookShelfItem;