import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

export default class AddPost extends Component {
  constructor() {
    super()
    this.state = {
      type: 'default'
    }
    this.selectType = this.selectType.bind(this)
  }
  selectType(ev) {
    let target = findDOMNode(ev.target).getAttribute('value')
    this.setState({
      type: target
    })
  }
  render() {
    let form

    switch (this.state.type) {
      case 'default': form = (
        <div>
          <label className="modal-post__label" htmlFor="modal-post__title">Title:</label>
          <input id="modal-post__title" className="modal-post__input modal-post__input_title" type="text"/>
          <label className="modal-post__label" htmlFor="modal-post__text">Text:</label>
          <textarea id="modal-post__text" className="modal-post__textarea modal-post__textarea_text"></textarea>
          <label className="modal-post__label" htmlFor="modal-post__hashtags">Hashtags:</label>
          <input id="modal-post__hashtags" className="modal-post__input modal-post__input_hashtags" type="text"/>
        </div>
      ); break;

      case 'picture': form = (
        <div>
          <label className="modal-post__label" htmlFor="modal-post__picture">Picture link:</label>
          <input id="modal-post__picture" className="modal-post__input modal-post__input_picture" type="text"/>
          <label className="modal-post__label" htmlFor="modal-post__title">Title:</label>
          <input id="modal-post__title" className="modal-post__input modal-post__input_title" type="text"/>
          <label className="modal-post__label" htmlFor="modal-post__text">Text:</label>
          <textarea id="modal-post__text" className="modal-post__textarea modal-post__textarea_text"></textarea>
          <label className="modal-post__label" htmlFor="modal-post__hashtags">Hashtags:</label>
          <input id="modal-post__hashtags" className="modal-post__input modal-post__input_hashtags" type="text"/>
        </div>
      ); break;

      case 'quote': form = (
        <div>
          <label className="modal-post__label" htmlFor="modal-post__quote">Author:</label>
          <input id="modal-post__quote" className="modal-post__input modal-post__input_quote" type="text"/>
          <label className="modal-post__label" htmlFor="modal-post__text">Text:</label>
          <textarea id="modal-post__text" className="modal-post__textarea modal-post__textarea_text"></textarea>
        </div>
      ); break;

      case 'video': form = (
        <div>
          <label className="modal-post__label" htmlFor="modal-post__video">Video:</label>
          <input id="modal-post__video" className="modal-post__input modal-post__input_video" type="text"/>
          <label className="modal-post__label" htmlFor="modal-post__title">Title:</label>
          <input id="modal-post__title" className="modal-post__input modal-post__input_title" type="text"/>
          <label className="modal-post__label" htmlFor="modal-post__hashtags">Hashtags:</label>
          <input id="modal-post__hashtags" className="modal-post__input modal-post__input_hashtags" type="text"/>
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
          onClick={this.selectType} checked={this.state.type === 'default' ? true : false} />
          <span className="modal-post__radio-text">Default with picture:</span>
          <input className="modal-post__radio" name="post-type" type="radio" value="picture" onClick={this.selectType}/>
          <span className="modal-post__radio-text">Quote:</span>
          <input className="modal-post__radio" name="post-type" type="radio" value="quote" onClick={this.selectType}/>
          <span className="modal-post__radio-text">Video:</span>
          <input className="modal-post__radio" name="post-type" type="radio" value="video" onClick={this.selectType}/>
          {form}
          <button className="modal-post__button" type="submit">Apply</button>
        </form>
      </div>
    )
  }
}
