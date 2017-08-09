import React from 'react';
import * as SearchKeywords from './utils/SearchKeywords'

class AutocompleteItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hoverFlag: false,
    }
    
    this.hoverEvent = this.hoverEvent.bind(this)

  }

  hoverEvent() {
    this.setState({hoverFlag : !this.state.hoverFlag})
    this.props.onSelectItem(this.props.label)
  }

  render() {
    var liStyle = {
      background: 'blue'
    };

    if (this.state.hoverFlag) {
      liStyle['background'] = '#880000';
    }

    return (
    <li
//        className={(this.props.showBulkActions ? 'show' : 'hidden')} 
        key={this.props.label}
        onMouseEnter={this.hoverEvent}
        onMouseLeave={this.hoverEvent}
        style={liStyle}
        >{this.props.label}</li>
    )
  }
}


export default AutocompleteItem;
