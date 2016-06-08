import React from 'react'
import marked from 'marked'

export default class PostDefault extends React.Component {
  render() {
    let preview = (this.props.preview) ? <a href={`/${this.props.url}/${this.props.data.id}`} className="post-body__button">read more</a> : null
    return (
      <div>
        <div className="post">
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
