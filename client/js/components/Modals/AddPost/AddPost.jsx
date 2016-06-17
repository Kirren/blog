import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import InfoModal from 'components/Modals/InfoModal/InfoModal'

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
      picture: null,
      gallery: null,
      toggleInfo: false
    }
    this.selectType = this.selectType.bind(this)
    this.handlerType = this.handlerType.bind(this)
    this.receiveData = this.receiveData.bind(this)
    this.checkPicture = this.checkPicture.bind(this)
    this.toggleInfo = this.toggleInfo.bind(this)
  }
  toggleInfo() {
    this.setState({
      toggleInfo: !this.state.toggleInfo
    })
  }
  selectType(ev) {
    let target = findDOMNode(ev.target).getAttribute('value')
    this.setState({
      type: target
    })
  }
  handlerType(ev) {
    let content = findDOMNode(ev.target).value
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

      case 'modal-post__gallery': this.setState({
          gallery: content.split('\n')
      }); break;
    }
  }
  checkPicture() {
    if(this.state.picture) {
      let url = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
      let regexp = new RegExp(url)
      let target = this.state.picture
      target = target.match(regexp)
      if (target) {
        return 'modal-post_success'
      } else return 'modal-post_failure'
    } else return ''
  }
  receiveData(ev) {
    ev.preventDefault()
    this.props.applyData({
      type: this.state.type,
      title: this.state.title,
      video: this.state.video,
      text: this.props.findTags(this.state.text) || "No text.",
      quote: this.state.quote,
      hashtags: this.state.hashtags,
      picture: this.state.picture,
      gallery: this.state.gallery
    })
  }
  render() {
    let form
    let button = (this.state.type) ? <button className="modal-post__button" type="submit" onClick={ this.receiveData }>Apply</button> : null

    let pictureInfo = (this.state.type === 'picture' && this.state.toggleInfo) ? (
      <InfoModal>Пример: http://example.com/picture.png</InfoModal>
    ) : null

    let galleryInfo = (this.state.type === 'gallery' && this.state.toggleInfo) ? (
      <InfoModal>После каждой ссылки должен быть нажат Enter</InfoModal>
    ) : null

    let videoInfo = (this.state.type === 'video' && this.state.toggleInfo) ? (
      <InfoModal>Последние буквы в ссылке: <span>https://www.youtube.com/watch?v=</span>kXcOyYEldZY</InfoModal>
    ) : null

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
          <label className="modal-post__label" htmlFor="modal-post__picture">
          Picture link:
          {pictureInfo}
          </label>
          <input onFocus={this.toggleInfo} onBlur={this.toggleInfo} autoComplete="off" onChange={this.handlerType} id="modal-post__picture" className={`modal-post__input modal-post__input_picture ${this.checkPicture()}`} type="text"/>
          <label className="modal-post__label" htmlFor="modal-post__title">Title:</label>
          <input onChange={this.handlerType} id="modal-post__title" className="modal-post__input modal-post__input_title" type="text"/>
          <label className="modal-post__label" htmlFor="modal-post__text">Text:</label>
          <textarea onChange={this.handlerType} id="modal-post__text" className="modal-post__textarea modal-post__textarea_text"></textarea>
          <label className="modal-post__label" htmlFor="modal-post__hashtags">Hashtags:</label>
          <input onChange={this.handlerType} id="modal-post__hashtags" className="modal-post__input modal-post__input_hashtags" type="text"/>
        </div>
      ); break;

      case 'gallery': form = (
        <div>
          <label className="modal-post__label" htmlFor="modal-post__gallery">
          Gallery links:
          {galleryInfo}
          </label>
          <textarea onFocus={this.toggleInfo} onBlur={this.toggleInfo} onChange={this.handlerType} id="modal-post__gallery" className="modal-post__textarea modal-post__textarea_gallery"></textarea>
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
          <label className="modal-post__label" htmlFor="modal-post__video">
          Video:
          {videoInfo}
          </label>
          <input onFocus={this.toggleInfo} onBlur={this.toggleInfo} onChange={this.handlerType} id="modal-post__video" className="modal-post__input modal-post__input_video" type="text"/>
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
          <span className="modal-post__radio-text">Gallery:</span>
          <input className="modal-post__radio" name="post-type" type="radio" value="gallery" onClick={this.selectType}/>
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
