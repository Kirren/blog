import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import ajax from 'axios'

class Post extends Component {
  render() {
    return (
      <div>
        <div className="post">
          <div className="post-body">
            <div className="post-body__action">{this.props.data.action}</div>
            <div className="post-body__date">{this.props.data.date}</div>
            <h2 className="post-body__title">{this.props.data.title}</h2>
            <div className="post-body__footer">
              <a href={`/search/${this.props.data.id}`} className="post-body__button">read more</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      data: null,
      backupData: null,
      renderedPosts: null
    }
    this.renderPosts = this.renderPosts.bind(this)
  }
  componentDidMount() {
    ajax.get('/api/getposts').then((response) => {
      this.setState({
        data: response.data,
        backupData: response.data
      })
    })
  }
  renderPosts(ev) {
    ev.preventDefault()
    let target = findDOMNode(this.refs.searchInput)
    if (!target) {
      return
    }
    if (!target.value) {
      this.setState({
        data: this.state.backupData
      })
      return
    }

    let regexp = new RegExp(target.value, 'im')
    let posts = this.state.backupData.filter((post) => {
      let title = post.title
      title = title.match(regexp)

      if (title) {
        return post
      }
    })

    let renderedPosts = posts.map((data, index) =>
      <Post key={index} data={data} />
    )

    this.setState({
      data: posts,
      renderedPosts: renderedPosts || null
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          <form className="search-form post">
            <div className="search-form__body">
              <input ref="searchInput" id="search-form__input" className="search-form__input" type="text"/>
              <button className="search-form__button" onClick={this.renderPosts}>click me</button>
            </div>
          </form>
          {this.state.renderedPosts}
        </div>
      </div>
    )
  }
}
