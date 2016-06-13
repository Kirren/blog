import React from 'react'
import marked from 'marked'

export default class PostGallery extends React.Component {
  constructor() {
    super()
    this.renderGallery = this.renderGallery.bind(this)
  }
  renderGallery() {
    let data = JSON.parse(this.props.data.gallery)
    if(this.props.preview) {
      let gallery
      switch (data.length) {
        case 0 : gallery = null; break;
        case 1 : {
          gallery =
            <div>
              <div className="col-12-12">
                <div style={{backgroundImage: `url(${data[0]})`}} className="post-head__picture post-head__picture_lg"></div>
              </div>
            </div>
        } break;
        case 2 : {
          gallery =
            <div>
              <div className="col-6-cycle">
                <div style={{backgroundImage: `url(${data[0]})`}} className="post-head__picture post-head__picture_sm"></div>
              </div>
              <div className="col-6-cycle">
                <div style={{backgroundImage: `url(${data[1]})`}} className="post-head__picture post-head__picture_sm"></div>
              </div>
            </div>
        } break;
        case 3 : {
          gallery =
            <div>
              <div className="col-6-cycle">
                <div style={{backgroundImage: `url(${data[0]})`}} className="post-head__picture post-head__picture_sm"></div>
              </div>
              <div className="col-6-cycle">
                <div style={{backgroundImage: `url(${data[1]})`}} className="post-head__picture post-head__picture_sm"></div>
              </div>
              <div className="col-12">
                <div style={{backgroundImage: `url(${data[2]})`}} className="post-head__picture post-head__picture_sm"></div>
              </div>
            </div>
        } break;
        default : {
          gallery =
            <div>
              <div className="col-6-cycle">
                <div style={{backgroundImage: `url(${data[0]})`}} className="post-head__picture post-head__picture_sm"></div>
              </div>
              <div className="col-6-cycle">
                <div style={{backgroundImage: `url(${data[1]})`}} className="post-head__picture post-head__picture_sm"></div>
              </div>
              <div className="col-6-cycle">
                <div style={{backgroundImage: `url(${data[2]})`}} className="post-head__picture post-head__picture_sm"></div>
              </div>
              <div className="col-6-cycle">
                <div style={{backgroundImage: `url(${data[3]})`}} className="post-head__picture post-head__picture_sm post-head__picture_black">
                  <div className="post-gallery__text">{data.length}</div>
                </div>
              </div>
            </div>
        } break;
      }
      return gallery
    } else {
      let gallery = data.map((pic) =>
        <div className="col-12-12">
          <div style={{backgroundImage: `url(${pic})`}} className="post-head__picture post-head__picture_full"></div>
        </div>
      )
      return gallery
    }
  }
  render() {
    let preview = (this.props.preview) ? <a href={`/${this.props.url}/${this.props.data.id}`} className="post-body__button">read more</a> : null

    return (
      <div>
        <div className="post">

        <div className="post-head">
          <div className="post-gallery">
            {this.renderGallery()}
          </div>
        </div>

          <div className="post-body">
            <div className="post-body__action">{this.props.data.action}</div>
            <div className="post-body__date">{this.props.data.date}</div>
            <h2 className="post-body__title">{this.props.data.title}</h2>
            <div className="post-body__text" dangerouslySetInnerHTML={{__html: marked(this.props.data.text) }} />
            <div className="post-body__footer">
              {preview}
              <div className="post-body__tags">{this.props.data.hashtags}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
