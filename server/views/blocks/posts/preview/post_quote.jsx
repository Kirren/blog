import React from 'react'

export default class PostQuote extends React.Component {
  render() {
    return (
      <div>
        <div className="post">
          <div className="post-body">

            <div className="post-body__action">{this.props.data.action}</div>
            <div className="post-body__date">{this.props.data.date}</div>
            <div className="post-body__text post-body__text_quote">{this.props.data.text}</div>
            <div className="post-body__quote">{this.props.data.quote}</div>

          </div>
        </div>
      </div>
    )
  }
}
