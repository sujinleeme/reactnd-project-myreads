import React from 'react';
import * as SearchKeywords from '../utils/SearchKeywords'

class AutocompleteItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hoverFlag: false,
      clickEvent: null
      
    }
    
    this.onHover = this.onHover.bind(this)
    this.offHover = this.offHover.bind(this)
    this.onEvent = this.onEvent.bind(this)
    
  }
  
  onEvent(e) {
    this.props.controlFunc(this.props.highlightedValue)
  }

  onHover() {
    this.setState({hoverFlag : true})
    this.props.onSelectItem(this.props.label)
    this.setState({clickEvent: event});
  }

  offHover() {
    this.setState({hoverFlag : false})
    this.props.onSelectItem(this.props.label)
    this.setState({clickEvent: event});
    
  }

  render() {
    const props = this.props;
    
    var liStyle = {
      background: '#fff'
    };

    if (this.state.hoverFlag) {
      liStyle['background'] = '#f2f4f7';
    }
    return (
    <li
        key={props.label}
        onClick={this.onEvent}

        onMouseEnter={this.onHover}
        onMouseLeave={this.offHover}
        style={liStyle}
        >{props.label}</li>
    )
  }
}


export default AutocompleteItem;