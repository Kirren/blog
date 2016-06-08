import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import ajax from 'axios'

// components
import ModalEditPost from 'components/Modals/EditPost/EditPost'
import ModalAddPost from 'components/Modals/AddPost/AddPost'
import ConfirmModal from 'components/Modals/ConfirmModal/ConfirmModal'

export default class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      backupData: null,
      postToEdit: null,
      idPostToEdit: null,
      postToDelete: null,
      isModalEditPost: false,
      isModalAddPost: false,
      isModalConfirmDeletePost: false,
      isSearch: false
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
    this.applyEditPost = this.applyEditPost.bind(this)
    this.findDangerousTags = this.findDangerousTags.bind(this)
    this.toggleSearch = this.toggleSearch.bind(this)
    this.filterPosts = this.filterPosts.bind(this)
  }
  componentDidMount() {
    ajax.get('/api/getposts').then((response) => {
      this.setState({
        data: response.data,
        backupData: response.data
      })
    })
  }
  findDangerousTags(target) {
    if (!target) {
      return ""
    }

    function replacer(str, s1, offset, s) {
      let tag
      let tagScript = s1.match(/(<script[^*<]+>)/gim) || ['so strange code']
      let tagForm = s1.match(/(<form[^*<]+>)/gim) || ['so strange code']
      let tagInput = s1.match(/(<input[^*<]+>)/gim) || ['so strange code']
      switch(s1) {
        case '</script>': tag = '&#60;/script&#62;'; break;
        case '<style>': tag = '&#60;style&#62;'; break;
        case '</style>': tag = '&#60;/style&#62;'; break;
        case '<html>': tag = '&#60;html&#62;'; break;
        case '</html>': tag = '&#60;/html&#62;'; break;
        case '<body>': tag = '&#60;body&#62;'; break;
        case '</body>': tag = '&#60;/body&#62;'; break;
        case '<head>': tag = '&#60;head&#62;'; break;
        case '</head>': tag = '&#60;/head&#62;'; break;
        case '</form>': tag = '&#60;/form&#62;'; break;
        case tagForm[0]: tag = '&#60;form&#62;'; break;
        case tagScript[0]: tag = '&#60;script&#62;'; break;
        case tagInput[0]: tag = '&#60;input&#62;'; break;
        case 'default': tag = s1; break;
      }
      return tag
    }

    return target.replace(/(<script[^*<]+>|<\/script>|<style>|<\/style>|<html>|<\/html>|<body>|<\/body>|<head>|<\/head>|<form[^*<]+>|<\/form>|<input[^*<]+>)/gim, replacer)
  }
  toggleSearch() {
    this.setState({
      isSearch: !this.state.isSearch
    })
  }
  filterPosts() {
    if (!this.refs.searchInput.value) {
      this.setState({
        data: this.state.backupData
      })
      return
    }

    let regexp = new RegExp(this.refs.searchInput.value, 'im')
    let posts = this.state.backupData.filter((post) => {
      let title = post.title
      title = title.match(regexp)

      if (title) {
        return post
      }
    })

    this.setState({
      data: posts
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
        idPostToEdit: target,
        postToEdit: response.data[0],
        isModalEditPost: true
      })
    })
  }
  applyEditPost(obj) {
    this.setState({
      isModalEditPost: false,
      postToEdit: null
    })
    ajax.post('/api/editpost', obj)
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
          data: response.data,
          backupData: response.data
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
        let title = (post.title) ? <td className="main-menu-item__title">{post.title}</td> : <td className="main-menu-item__title">No title</td>
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
      <ModalEditPost findTags={this.findDangerousTags} exit={this.exitEditPost} data={this.state.postToEdit} applyData={this.applyEditPost} idPost={this.state.idPostToEdit}/>
    ) : null

    let modalAdd = (this.state.isModalAddPost) ? (
      <ModalAddPost findTags={this.findDangerousTags} applyData={this.dataFromAddPost} exit={this.exitAddPost} />
    ) : null

    let modalConfirm = (this.state.isModalConfirmDeletePost) ? (
      <ConfirmModal confirm={this.applyDeletePost} postId={this.state.postToDelete} exit={this.exitConfirmDeletePost} />
    ) : null

    let searchInput = (this.state.isSearch) ? (
      <input ref="searchInput" onChange={this.filterPosts} className="main-topbar__input" type="text"/>
    ) : null

    return (
      <div>
        {modalAdd}
        {modalEdit}
        {modalConfirm}
        <div className="main-topbar">
          <div className="main-topbar__button" onClick={this.addPost}>Add</div>
          <div className="main-topbar__button" onClick={this.toggleSearch}>Search</div>
          {searchInput}
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
