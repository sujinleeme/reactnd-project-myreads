import React from 'react';
import PropTypes from 'prop-types'

const BookShelfItem = (props) => (
    
    <div className="book">
      <div className="book-top">
        <div className="book-cover" 
          style={{ 
            width: 128,
            height: 193,
            backgroundImage:  `url(${JSON.stringify(props.imageLinks, ["thumbnail"])})`
            }}></div>
        <div className="book-shelf-changer">
          <select>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.authors}</div>
      </div>
);



export default BookShelfItem;