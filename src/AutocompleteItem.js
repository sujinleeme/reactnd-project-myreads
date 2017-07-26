import React from 'react';
import * as SearchKeywords from './utils/SearchKeywords'

class AutocompleteItem extends React.Component {

  constructor(props) {
    super(props);
  }

  onClick() {
  }

  render() {
    return (
      <li>{this.props.label}</li>
    )
  }
}


export default AutocompleteItem;
