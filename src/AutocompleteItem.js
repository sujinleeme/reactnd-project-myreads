import React from 'react';
import * as SearchKeywords from './utils/SearchKeywords'

class AutocompleteItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentLabel: '',
      highlightedValue: '',
      hover_flag: false,
      isSelected: false,
      // query: ''
    }
    
    this.hoverEvent = this.hoverEvent.bind(this)
    this.handleCheck = this.handleCheck.bind(this)

  }

  onClick() {
  }

  hoverEvent() {
    this.setState({hover_flag: !this.state.hover_flag})
    console.log(this.props.label)
    this.props.sendData(this.props.label)
  }

  getMapPoint() {

  }

  handleCheck() {
    console.log(this.handleCheck)
  }

  render() {
    var liStyle = {
      background: 'blue'
    };
    if (this.state.hover_flag) {
      liStyle['background'] = '#880000';
    }

    return (
    <li
//        className={(this.props.showBulkActions ? 'show' : 'hidden')} 
        key={this.props.label}
        onMouseEnter={this.hoverEvent}
        onMouseLeave={this.hoverEvent}
        onClick={this.handleCheck.bind(this)}
        style={liStyle}
        >{this.props.label}</li>
    )
  }
}


export default AutocompleteItem;
