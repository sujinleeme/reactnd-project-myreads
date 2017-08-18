import React from 'react';
import PropTypes from 'prop-types'
import BookDetailButton from './BookDetailButton'

import * as utils from '../utils/Common'

const BookStyle = {
  width: 128,
  height: 193
}

class BookShelfItem extends React.Component {

  constructor(props) {
    super(props);
  }

  getImageLink = (obj) => {
    const imageList = utils.deepCopy(obj.imageLinks)
    if(imageList !== null){
      return (imageList.smallThumbnail)
    }
  }
  render() {
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
        < BookDetailButton />

      </div>
      <div className="book-title">{this.props.title}</div>
      <div className="book-authors">{this.props.authors}</div>
      </div>
    )
  }
}

export default BookShelfItem;