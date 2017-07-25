import React from 'react';

const SearchInput = (props) => (
  <input
    className={props.className}
    name={props.name}
    value={props.content}
    onChange={props.controlFunc}
    onKeyPress={props.handelKeyPress}
    placeholder={props.placeholder}
  />
);

SearchInput.propTypes = {

}

export default SearchInput;