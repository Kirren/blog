import React from 'react'
import marked from 'marked'

export default class PostPicture extends React.Component {
  render() {
    return (
      <div>
        <div className="post">
          <div className="post-head">

            <div style={{backgroundImage: `url(${this.props.data.picture})`}} className="post-head__picture"></div>

          </div>
          <div className="post-body">

            <div className="post-body__action">{this.props.data.action}</div>
            <div className="post-body__date">{this.props.data.date}</div>
            <h2 className="post-body__title">{this.props.data.title}</h2>
            <div className="post-body__text" dangerouslySetInnerHTML={{__html: marked(this.props.data.text) }} />
            <div className="post-body__footer">
              <a href="" className="post-body__button">read more</a>
              <div className="post-body__tags">{this.props.data.hashtags}</div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
