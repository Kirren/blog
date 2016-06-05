import React, { Component } from 'react'

export default class ModalEditPost extends Component {
  render() {
    return (
      <div className="modal-editpost">
        <div className="modal-editpost__exit" onClick={this.props.exit}>EXIT</div>
      </div>
    )
  }
}
