import React from 'react'

class AutocompleteItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverFlag: false,
      clickEvent: null
    }
  }

  onEvent = (e) => {
    this.props.updateQuery(this.props.highlightedValue)
    if (this.props.highlightedValue) {
      this.props.onSearchBooks()
    }
  }

  onHover = () => {
    this.setState({hoverFlag: true})
    this.props.onSelectItem(this.props.label)
    this.setState({clickEvent: event});
  }

  offHover = () => {
    this.setState({hoverFlag: false})
    this.props.onSelectItem(this.props.label)
    this.setState({clickEvent: event});
  }

  render() {
    const props = this.props;
    const liStyle = {background: '#fff'};
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

export default AutocompleteItem
