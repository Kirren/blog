import React from 'react'
import marked from 'marked'

export default class PostGallery extends React.Component {
  render() {
    let gallery = JSON.parse(this.props.data.gallery)
    return (
      <div>
        <div className="post">
          <div className="post-head">

            <div className="post-gallery">
              <div className="col-6-cycle">
                <div style={{backgroundImage: `url(${gallery[0]})`}} className="post-head__picture post-head__picture_sm"></div>
              </div>
              <div className="col-6-cycle">
                <div style={{backgroundImage: `url(${gallery[1]})`}} className="post-head__picture post-head__picture_sm"></div>
              </div>
              <div className="col-6-cycle">
                <div style={{backgroundImage: `url(${gallery[2]})`}} className="post-head__picture post-head__picture_sm"></div>
              </div>
              <div className="col-6-cycle">
                <div style={{backgroundImage: `url(${gallery[3]})`}} className="post-head__picture post-head__picture_sm">
                  <div className="post-gallery__text">{gallery.length}</div>
                </div>
              </div>
            </div>

          </div>
          <div className="post-body">

            <div className="post-body__action">{this.props.data.action}</div>
            <div className="post-body__date">{this.props.data.date}</div>
            <h2 className="post-body__title">{this.props.data.title}</h2>
            <div className="post-body__text" dangerouslySetInnerHTML={{__html: marked(this.props.data.text) }} />
            <div className="post-body__footer">
              <a href="/" className="post-body__button">read more</a>
              <div className="post-body__tags">{this.props.data.hashtags}</div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
