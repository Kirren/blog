import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

export default class ModalEditPost extends Component {
  constructor() {
    super()
    this.handleApply = this.handleApply.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentWillMount() {
    this.setState({
      title: this.props.data.title || null,
      text: this.props.data.text || null,
      picture: this.props.data.picture || null,
      video: this.props.data.video || null,
      quote: this.props.data.quote || null,
      hashtags: this.props.data.hashtags || null,
      gallery: JSON.parse(this.props.data.gallery) || null
    })
  }
  handleApply(ev) {
    ev.preventDefault()
    this.props.applyData({
      id: this.props.idPost,
      title: this.state.title,
      text: this.props.findTags(this.state.text),
      picture: this.state.picture,
      video: this.state.video,
      quote: this.state.quote,
      hashtags: this.state.hashtags,
      gallery: (this.state.gallery) ? JSON.stringify(this.state.gallery) : null
    })
  }
  handleChange(ev) {
    let target = findDOMNode(ev.target).id
    let value = findDOMNode(ev.target).value

    switch (target) {
      case 'modal-post__title': this.setState({
        title: value
      }); break;

      case 'modal-post__text': this.setState({
        text: value
      }); break;

      case 'modal-post__picture': this.setState({
        picture: value
      }); break;

      case 'modal-post__video': this.setState({
        video: value
      }); break;

      case 'modal-post__quote': this.setState({
        quote: value
      }); break;

      case 'modal-post__hashtags': this.setState({
        hashtags: value
      }); break;

      case 'modal-post__gallery': this.setState({
        gallery: value.split(',')
      }); break;
    }
  }
  render() {
    let video = (this.props.data.video) ? (
    <div>
      <label className="modal-post__label" htmlFor="modal-post__video">Video:</label>
      <input onChange={this.handleChange} id="modal-post__video" className="modal-post__input modal-post__input_video" value={this.state.video} type="text"/>
    </div>
    ) : null

    let quote = (this.props.data.quote) ? (
    <div>
      <label className="modal-post__label" htmlFor="modal-post__quote">Author:</label>
      <input onChange={this.handleChange} id="modal-post__quote" className="modal-post__input modal-post__input_quote" value={this.state.quote} type="text"/>
    </div>
    ) : null

    let picture = (this.props.data.picture) ? (
    <div>
      <label className="modal-post__label" htmlFor="modal-post__picture">Picture link:</label>
      <input onChange={this.handleChange} id="modal-post__picture" className="modal-post__input modal-post__input_picture" value={this.state.picture} type="text"/>
    </div>
    ) : null

    let gallery = (this.props.data.gallery) ? (
    <div>
      <label className="modal-post__label" htmlFor="modal-post__gallery">Gallery links:</label>
      <textarea onChange={this.handleChange} id="modal-post__gallery" className="modal-post__textarea modal-post__textarea_gallery" value={this.state.gallery}></textarea>
    </div>
    ) : null

    let title = (this.props.data.title) ? (
    <div>
      <label className="modal-post__label" htmlFor="modal-post__title">Title:</label>
      <input onChange={this.handleChange} id="modal-post__title" className="modal-post__input modal-post__input_title" value={this.state.title} type="text"/>
    </div>
    ) : null

    let text = (this.props.data.text) ? (
    <div>
      <label className="modal-post__label" htmlFor="modal-post__text">Text:</label>
      <textarea onChange={this.handleChange} id="modal-post__text" className="modal-post__textarea modal-post__textarea_text" value={this.state.text}></textarea>
    </div>
    ) : null

    return (
      <div className="modal-post">
        <div className="modal-post__exit" onClick={this.props.exit}>Exit</div>
        <form action="modal-post__form">
          {video}
          {quote}
          {picture}
          {gallery}
          {title}
          {text}
          <button className="modal-post__button" type="submit" onClick={this.handleApply}>Apply</button>
        </form>
      </div>
    )
  }
}
