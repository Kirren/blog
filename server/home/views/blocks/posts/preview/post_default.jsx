import React from 'react'

export default class PostDefault extends React.Component {
  render() {
    return (
      <div>
        <div className="post">
          <div className="post-body">
            <div className="post-body__action">{this.props.data.action}</div>
            <div className="post-body__date">{this.props.data.date}</div>
            <h2 className="post-body__title">{this.props.data.title}</h2>
            <div className="post-body__text">{this.props.data.text}</div>
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
