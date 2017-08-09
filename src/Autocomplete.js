import React from 'react';
import * as SearchKeywords from './utils/SearchKeywords'
import AutocompleteItem from './AutocompleteItem'
import SearchInput from './SearchInput'


class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: SearchKeywords,
      showItems: true,
    }
  }
  

  render() {
    const props = this.props;
    let searchableKeywords = this.currentMatches()
    return (
      <div>
        <SearchInput
          {...props} />
          {this.state.showItems?
            this.renderMatches():
          null}
      </div>
    )
  }

  renderMatches() {
    const props = this.props;
    let searchableKeywords = this.currentMatches()

    return (
      <ol className="match-keywords">
        {Object.keys(searchableKeywords).map((k, index) =>
          <AutocompleteItem
            key={k}
            {...props}            
            {...searchableKeywords[k]} />
        )} 
      </ol>
   )
  }
  
  currentMatches() {
    const list = this.state.list.SearchKeywords
    return list.filter((item) => {
      let searchInput = this.props.content;
      return item.label.indexOf(searchInput) > -1;
    })
  }
}

export default Autocomplete;
