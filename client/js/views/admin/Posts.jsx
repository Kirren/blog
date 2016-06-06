import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import ajax from 'axios'

// components
import ModalEditPost from 'components/Modals/EditPost/EditPost'
import ModalAddPost from 'components/Modals/AddPost/AddPost'
import ConfirmModal from 'components/Modals/ConfirmModal/ConfirmModal'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      postToEdit: null,
      postToDelete: null,
      isModalEditPost: false,
      isModalAddPost: false,
      isModalConfirmDeletePost: false
    }
    this.isLoaded = this.isLoaded.bind(this)
    this.editPost = this.editPost.bind(this)
    this.exitEditPost = this.exitEditPost.bind(this)
    this.addPost = this.addPost.bind(this)
    this.exitAddPost = this.exitAddPost.bind(this)
    this.dataFromAddPost = this.dataFromAddPost.bind(this)
    this.confirmDeletePost = this.confirmDeletePost.bind(this)
    this.applyDeletePost = this.applyDeletePost.bind(this)
    this.exitConfirmDeletePost = this.exitConfirmDeletePost.bind(this)
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
  confirmDeletePost(ev) {
    let target = findDOMNode(ev.target).parentNode.getAttribute('data-post-id')
    this.setState({
      isModalConfirmDeletePost: true,
      postToDelete: target
    })
  }
  exitConfirmDeletePost() {
    this.setState({
      isModalConfirmDeletePost: false
    })
  }
  applyDeletePost(id) {
    this.setState({
      isModalConfirmDeletePost: false
    })
    ajax.post('/api/deletepost', {id: id}).then(() => {
      ajax.get('/api/getposts').then((response) => {
        this.setState({
          data: response.data
        })
      })
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

      case 'picture': ajax.post('/api/addpost', {
        title: obj.title,
        picture: obj.picture,
        date: `${(new Date).getDate()}/${(new Date).getMonth() + 1}/${(new Date).getFullYear()}`,
        text: obj.text,
        hashtags: obj.hashtags,
        action: 'Posted by pavlovsch'
      }); break;

      case 'quote': ajax.post('/api/addpost', {
        quote: obj.quote,
        date: `${(new Date).getDate()}/${(new Date).getMonth() + 1}/${(new Date).getFullYear()}`,
        text: obj.text,
        action: 'Posted by pavlovsch'
      }); break;

      case 'video': ajax.post('/api/addpost', {
        title: obj.title,
        date: `${(new Date).getDate()}/${(new Date).getMonth() + 1}/${(new Date).getFullYear()}`,
        video: obj.video,
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
        let quote = (post.quote) ? <td className="main-menu-item__title">{post.quote} quote</td> : null
        return (
          <tr data-post-id={post.id} key={index} className="main-menu-item">
            <td className="main-menu-item__date">{post.date}</td>
            {title}
            {quote}
            <td className="main-menu-item__edit" onClick={this.editPost}>Edit</td>
            <td className="main-menu-item__delete" onClick={this.confirmDeletePost}>Delete</td>
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

    let modalConfirm = (this.state.isModalConfirmDeletePost) ? (
      <ConfirmModal confirm={this.applyDeletePost} postId={this.state.postToDelete} exit={this.exitConfirmDeletePost} />
    ) : null

    return (
      <div>
        {modalAdd}
        {modalEdit}
        {modalConfirm}
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

//34e367
