import React from 'react';
import * as SearchKeywords from './utils/SearchKeywords'
import AutocompleteItem from './AutocompleteItem'

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

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: SearchKeywords,
      showItems: true,
      selectAllTextOnClick: true,
      selectedItem: ''
    }
  }
  getSelectedItemData = (data) =>{
    this.setState({selectedItem: data});     
  }
  render() {
    const props = this.props;
    let searchableKeywords = this.currentMatches()
    // console.log(this.props.content)
    return (
      <div>
        <SearchInput {...props} />
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
            onClick={props.handelKeyPress}
            query={this.props.content}
            sendData={this.getSelectedItemData}
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
