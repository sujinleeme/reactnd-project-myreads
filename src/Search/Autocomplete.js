import React from 'react';
import * as SearchKeywords from '../utils/SearchKeywords'
import AutocompleteItem from './AutocompleteItem'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'


class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: SearchKeywords,
      matchedList: [],
      showItems: false,
    }

  }
  
  componentWillMount() {
    if (!this.state.showItems) {
      this.setState({showItems: true})
    }
  }

  render() {
    const props = this.props;
    return (
      <Link to={`/search?q=${props.query}`}  >
        <SearchInput
          {...props}
        />
          {this.state.showItems?
            this.renderMatches():
          null}
      </Link>
    )
  }

  renderMatches() {
    const props = this.props
    let searchableKeywords = this.currentMatches()
    return (
      <div>
        {searchableKeywords && searchableKeywords.length > 0 ? (
          <ol className="match-keywords">
          {Object.keys(searchableKeywords).map((k, index) =>
          <AutocompleteItem
            key={k}
            {...props}            
            {...searchableKeywords[k]} />
        )} 
          </ol>
        ) : (
          null
        )}
      </div>
    )
  }
  
  currentMatches() {
    const list = this.state.list.SearchKeywords
    return list.filter((item) => {
      let searchInput = this.props.query;
      return item.label.indexOf(searchInput) > -1;
    })
  }
}

export default Autocomplete;
