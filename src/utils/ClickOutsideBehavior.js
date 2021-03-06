/**
 * Component that alerts if you click outside of it
 */

import React from 'react'

class ClickOutsideBehavior extends React.Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef = (node) => {
    this.wrapperRef = node
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside = (event) => {
    this.wrapperRef && !this.wrapperRef.contains(event.target) ?
      this.props.controlInside() :
      this.props.controlOutside()
  }

  render() {
    return (
      <div ref={this.setWrapperRef}>
        {this.props.children}
      </div>
    )
  }
}

export default ClickOutsideBehavior
