import React from 'react'

export default class PostQuote extends React.Component {
  render() {
    return (
      <div>
        <div className="post">
          <div className="post-head">

            <div className="post-head__video">
              <iframe src={`//www.youtube.com/embed/${this.props.data.video}`} frameBorder="0" width="560" height="349" allowFullScreen></iframe>
            </div>

          </div>
          <div className="post-body">

            <div className="post-body__action">{this.props.data.action}</div>
            <div className="post-body__date">{this.props.data.date}</div>
            <h2 className="post-body__title post-body__title_video">{this.props.data.title}</h2>
            <div className="post-body__footer">
              <div className="post-body__tags post-body__tags_video">{this.props.data.hashtags}</div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
