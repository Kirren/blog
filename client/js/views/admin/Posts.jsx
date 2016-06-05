import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import ajax from 'axios'

// components
import ModalEditPost from 'components/Modals/EditPost/EditPost.jsx'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      postToEdit: null,
      enableModalEditPost: false
    }
    this.isLoaded = this.isLoaded.bind(this)
    this.editPost = this.editPost.bind(this)
    this.exitEditPost = this.exitEditPost.bind(this)
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
      this.setState({
        postToEdit: response.data[0],
        enableModalEditPost: true
      })
    })
  }
  exitEditPost() {
    this.setState({
      enableModalEditPost: false
    })
  }
  isLoaded() {
    let posts
    if(this.state.data !== null) {
      posts = this.state.data.map((post, index) => {
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
    let modal = (this.state.enableModalEditPost) ? <ModalEditPost exit={this.exitEditPost} data={this.state.postToEdit} /> : null
    return (
      <div>
        {modal}
        <table className="main-menu">
          <tbody>
            {this.isLoaded()}
          </tbody>
        </table>
      </div>

    )
  }
}
