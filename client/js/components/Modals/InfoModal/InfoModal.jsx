import React, { Component } from 'react'

export default class InfoModal extends Component {
  render() {
    return (
      <div className="info-modal">{this.props.children}</div>
    )
  }
}
