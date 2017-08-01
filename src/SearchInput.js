import React from 'react';



class SearchInput extends React.Component {
  constructor(props) {
    super(props);

  }
  

  render() {
    const props = this.props;
    return (
        <input
          className={props.className}
          value={props.inputValue}
          onBlur={props.changeInputValue}
          onChange={props.controlFunc}
          onKeyPress={props.handelKeyPress}
          placeholder={props.placeholder}
        />
    )
  }
}


export default SearchInput;