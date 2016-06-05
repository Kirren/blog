import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import ajax from 'axios'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
    this.isLoaded = this.isLoaded.bind(this)
    this.editPost = this.editPost.bind(this)
  }
  componentDidMount() {
    ajax.get('/api/getposts').then((response) => {
      this.setState({
        data: response.data
      })
    })
  }
  editPost(ev) {
    let target = findDOMNode(ev.target).parentNode.getAttribute('data-post-id')
    ajax.get('/api/getposts/' + target).then((response) => {
      console.log(response.data[0])
    })
  }
  isLoaded(data) {
    let posts
    if(data !== null) {
      posts = data.map((post, index) => {
        let title = (post.title) ? <td className="main-menu-item__title">{post.title}</td> : null
        let quote = (post.quote) ? <td className="main-menu-item__title">{post.quote}'s quote.</td> : null
        return (
          <tr data-post-id={post.id} key={index} className="main-menu-item">
            <td className="main-menu-item__date">{post.date}</td>
            {title}
            {quote}
            <td className="main-menu-item__edit" onClick={this.editPost}>Edit</td>
          </tr>
        )
      })
      return posts
    }
  }
  render() {
    return (
      <table className="main-menu">
        <tbody>
          {this.isLoaded(this.state.data)}
        </tbody>
      </table>
    )
  }
}
