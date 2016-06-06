import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

export default class AddPost extends Component {
  constructor() {
    super()
    this.state = {
      type: null,
      title: null,
      video: null,
      text: null,
      quote: null,
      hashtags: null,
      picture: null
    }
    this.selectType = this.selectType.bind(this)
    this.handlerType = this.handlerType.bind(this)
    this.receiveData = this.receiveData.bind(this)
    this.avoidSubmit = this.avoidSubmit.bind(this)
  }
  avoidSubmit(ev) {
    ev.preventDefault()
  }
  selectType(ev) {
    let target = findDOMNode(ev.target).getAttribute('value')
    this.setState({
      type: target
    })
  }
  handlerType(ev) {
    let content = findDOMNode(ev.target).value || findDOMNode(ev.target).textContent
    let id = findDOMNode(ev.target).getAttribute('id')
    switch (id) {
      case 'modal-post__title': this.setState({
        title: content
      }); break;

      case 'modal-post__text': this.setState({
        text: content
      }); break;

      case 'modal-post__hashtags': this.setState({
        hashtags: content
      }); break;

      case 'modal-post__picture': this.setState({
        picture: content
      }); break;

      case 'modal-post__quote': this.setState({
        quote: content
      }); break;

      case 'modal-post__video': this.setState({
        video: content
      }); break;
    }
  }
  receiveData(ev) {
    ev.preventDefault()
    this.props.applyData({
      type: this.state.type,
      title: this.state.title,
      video: this.state.video,
      text: this.state.text,
      quote: this.state.quote,
      hashtags: this.state.hashtags,
      picture: this.state.picture
    })
  }
  render() {
    let form
    let button = (this.state.type) ? <button className="modal-post__button" type="submit" onClick={ this.receiveData }>Apply</button> : null

    switch (this.state.type) {
      case 'default': form = (
        <div>
          <label className="modal-post__label" htmlFor="modal-post__title">Title:</label>
          <input onChange={this.handlerType} id="modal-post__title" className="modal-post__input modal-post__input_title" type="text"/>
          <label className="modal-post__label" htmlFor="modal-post__text">Text:</label>
          <textarea onChange={this.handlerType} id="modal-post__text" className="modal-post__textarea modal-post__textarea_text"></textarea>
          <label className="modal-post__label" htmlFor="modal-post__hashtags">Hashtags:</label>
          <input onChange={this.handlerType} id="modal-post__hashtags" className="modal-post__input modal-post__input_hashtags" type="text"/>
        </div>
      ); break;

      case 'picture': form = (
        <div>
          <label className="modal-post__label" htmlFor="modal-post__picture">Picture link:</label>
          <input onChange={this.handlerType} id="modal-post__picture" className="modal-post__input modal-post__input_picture" type="text"/>
          <label className="modal-post__label" htmlFor="modal-post__title">Title:</label>
          <input onChange={this.handlerType} id="modal-post__title" className="modal-post__input modal-post__input_title" type="text"/>
          <label className="modal-post__label" htmlFor="modal-post__text">Text:</label>
          <textarea onChange={this.handlerType} id="modal-post__text" className="modal-post__textarea modal-post__textarea_text"></textarea>
          <label className="modal-post__label" htmlFor="modal-post__hashtags">Hashtags:</label>
          <input onChange={this.handlerType} id="modal-post__hashtags" className="modal-post__input modal-post__input_hashtags" type="text"/>
        </div>
      ); break;

      case 'quote': form = (
        <div>
          <label className="modal-post__label" htmlFor="modal-post__quote">Author:</label>
          <input onChange={this.handlerType} id="modal-post__quote" className="modal-post__input modal-post__input_quote" type="text"/>
          <label className="modal-post__label" htmlFor="modal-post__text">Text:</label>
          <textarea onChange={this.handlerType} id="modal-post__text" className="modal-post__textarea modal-post__textarea_text"></textarea>
        </div>
      ); break;

      case 'video': form = (
        <div>
          <label className="modal-post__label" htmlFor="modal-post__video">Video:</label>
          <input onChange={this.handlerType} id="modal-post__video" className="modal-post__input modal-post__input_video" type="text"/>
          <label className="modal-post__label" htmlFor="modal-post__title">Title:</label>
          <input onChange={this.handlerType} id="modal-post__title" className="modal-post__input modal-post__input_title" type="text"/>
          <label className="modal-post__label" htmlFor="modal-post__hashtags">Hashtags:</label>
          <input onChange={this.handlerType} id="modal-post__hashtags" className="modal-post__input modal-post__input_hashtags" type="text"/>
        </div>
      ); break;
    }


    return (
      <div className="modal-post">
        <div className="modal-post__exit" onClick={this.props.exit}>Exit</div>
        <form action="modal-post__form">
          <div className="modal-post__heading">Select the type of post:</div>
          <span className="modal-post__radio-text">Default:</span>
          <input className="modal-post__radio" name="post-type" type="radio" value="default"
          onClick={this.selectType} />
          <span className="modal-post__radio-text">Default with picture:</span>
          <input className="modal-post__radio" name="post-type" type="radio" value="picture" onClick={this.selectType}/>
          <span className="modal-post__radio-text">Quote:</span>
          <input className="modal-post__radio" name="post-type" type="radio" value="quote" onClick={this.selectType}/>
          <span className="modal-post__radio-text">Video:</span>
          <input className="modal-post__radio" name="post-type" type="radio" value="video" onClick={this.selectType}/>
          {form}
          {button}
        </form>
      </div>
    )
  }
}
