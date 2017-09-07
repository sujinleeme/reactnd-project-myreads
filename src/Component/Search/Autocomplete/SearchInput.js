import React from 'react'

class SearchInput extends React.Component {
  
  render() {
    const props = this.props;
    return (
      <div className={props.className}>
        <input
          value={props.inputValue}
          onBlur={props.changeInputValue}
          onChange={props.updateQuery}
          onKeyPress={props.handelKeyPress}
          placeholder={props.placeholder}
        />
        <button onClick={props.onSearchBooks} className="search_btn material-icons">search</button>
      </div>
    )
  }
}

export default SearchInput;