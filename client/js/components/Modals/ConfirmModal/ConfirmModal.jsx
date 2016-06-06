import React, { Component } from 'react'

export default class ConfirmModal extends Component {
  constructor() {
    super()
    this.confirm = this.confirm.bind(this)
  }
  confirm() {
    this.props.confirm(this.props.postId)
  }
  render() {
    return (
      <div className="modal-post modal-post_sm">
        <div className="modal-post__heading modal-post__heading_sm">Are you sure ?</div>
        <div className="modal-post__button modal-post__button_sm" onClick={this.confirm}>Yes</div>
        <div className="modal-post__button modal-post__button_sm" onClick={this.props.exit}>No</div>
      </div>
    )
  }
}
