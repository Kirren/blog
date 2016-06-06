import React, { Component } from 'react'

export default class ModalEditPost extends Component {
  render() {

    let video = (this.props.data.video) ? (
    <div>
      <label className="modal-post__label" htmlFor="modal-post__video">Video:</label>
      <input id="modal-post__video" className="modal-post__input modal-post__input_video" value={this.props.data.video} type="text"/>
    </div>
    ) : null

    let quote = (this.props.data.quote) ? (
    <div>
      <label className="modal-post__label" htmlFor="modal-post__quote">Author:</label>
      <input id="modal-post__quote" className="modal-post__input modal-post__input_quote" value={this.props.data.quote} type="text"/>
    </div>
    ) : null

    let title = (this.props.data.title) ? (
    <div>
      <label className="modal-post__label" htmlFor="modal-post__title">Title:</label>
      <input id="modal-post__title" className="modal-post__input modal-post__input_title" value={this.props.data.title} type="text"/>
    </div>
    ) : null

    let text = (this.props.data.text) ? (
    <div>
      <label className="modal-post__label" htmlFor="modal-post__text">Text:</label>
      <textarea id="modal-post__text" className="modal-post__textarea modal-post__textarea_text">{this.props.data.text}</textarea>
    </div>
    ) : null

    return (
      <div className="modal-post">
        <div className="modal-post__exit" onClick={this.props.exit}>Exit</div>
        <form action="modal-post__form">
          {video}
          {quote}
          {title}
          {text}
          <button className="modal-post__button" type="submit">Apply</button>
        </form>
      </div>
    )
  }
}
