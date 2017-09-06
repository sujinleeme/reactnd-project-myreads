import React from 'react'
import {Link} from 'react-router-dom'
import * as SearchKeywords from '../../../utils/SearchKeywords'
import AutocompleteItem from './AutocompleteItem'
import SearchInput from './SearchInput'
import ClickOutsideBehavior from '../../../utils/ClickOutsideBehavior'

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: SearchKeywords,
      matchedList: [],
    }
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
  
  render() {
    const props = this.props;
    return (
      <Link to={`/search?q=${props.query}`}>
        <ClickOutsideBehavior controlInside={props.offAutoComplete} controlOutside={props.onAutoComplete}>
          <SearchInput {...props} />
          {props.showAutoComplete ?
            this.renderMatches() :
            null}
        </ClickOutsideBehavior>
      </Link>
    )
  }
}

export default Autocomplete;
