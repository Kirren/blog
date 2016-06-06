import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import ajax from 'axios'

// components
import ModalEditPost from 'components/Modals/EditPost/EditPost.jsx'
import ModalAddPost from 'components/Modals/AddPost/AddPost.jsx'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      postToEdit: null,
      isModalEditPost: false,
      isModalAddPost: false
    }
    this.isLoaded = this.isLoaded.bind(this)
    this.editPost = this.editPost.bind(this)
    this.exitEditPost = this.exitEditPost.bind(this)
    this.addPost = this.addPost.bind(this)
    this.exitAddPost = this.exitAddPost.bind(this)
    this.dataFromAddPost = this.dataFromAddPost.bind(this)
  }
  componentDidMount() {
    ajax.get('/api/getposts').then((response) => {
      this.setState({
        data: response.data
      })
    })
  }
  addPost() {
    this.setState({
      isModalAddPost: true
    })
  }
  exitAddPost() {
    this.setState({
      isModalAddPost: false
    })
  }
  editPost(ev) {
    let target = findDOMNode(ev.target).parentNode.getAttribute('data-post-id')
    ajax.get('/api/getposts/' + target).then((response) => {
      this.setState({
        postToEdit: response.data[0],
        isModalEditPost: true
      })
    })
  }
  exitEditPost() {
    this.setState({
      postToEdit: null,
      isModalEditPost: false
    })
  }
  dataFromAddPost(obj) {
    this.setState({
      isModalAddPost: false
    })
    switch (obj.type) {
      case 'default': ajax.post('/api/addpost', {
        title: obj.title,
        date: `${(new Date).getDate()}/${(new Date).getMonth() + 1}/${(new Date).getFullYear()}`,
        text: obj.text,
        hashtags: obj.hashtags,
        action: 'Posted by pavlovsch'
      }); break;
    }
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
            <td className="main-menu-item__delete">Delete</td>
          </tr>
        )
      })
      return posts
    }
  }
  render() {
    let modalEdit = (this.state.isModalEditPost) ? (
      <ModalEditPost exit={this.exitEditPost} data={this.state.postToEdit} />
    ) : null

    let modalAdd = (this.state.isModalAddPost) ? (
      <ModalAddPost applyData={this.dataFromAddPost} exit={this.exitAddPost} />
    ) : null

    return (
      <div>
        {modalAdd}
        {modalEdit}
        <div className="main-topbar">
          <div className="main-topbar__button" onClick={this.addPost}>Add</div>
          <div className="main-topbar__button">Search</div>
        </div>
        <table className="main-menu">
          <tbody>
            {this.isLoaded()}
          </tbody>
        </table>
      </div>

    )
  }
}
