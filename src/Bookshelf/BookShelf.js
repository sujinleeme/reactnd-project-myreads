import React from 'react';
import BookShelfItem from './BookShelfItem'

class BookShelf extends React.Component {

      
  render() {
    const BookList = {...this.props.bookList}

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {Object.keys(BookList).map((k, index) =>
                <li key={k} className="book">
                  {<BookShelfItem {...BookList[k]} />}
                </li>
              )}
            </ol>
          </div>
      </div>
    )
  }
}

export default BookShelf;