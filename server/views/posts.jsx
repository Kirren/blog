import React from 'react'

// components
import Navbar from './blocks/navbar.jsx'

import PostDefault from './blocks/posts/preview/post_default.jsx'
import PostGallery from './blocks/posts/preview/post_gallery.jsx'
import PostPicture from './blocks/posts/preview/post_picture.jsx'
import PostQuote from './blocks/posts/preview/post_quote.jsx'
import PostVideo from './blocks/posts/preview/post_video.jsx'

class Posts extends React.Component {
  render() {
    let regexp = /\[INTRO: END]/
    let posts = this.props.data.posts.map((post) => {
      let text = regexp.exec(post.text) || null
      if (this.props.data.preview && text && text.index) {
          post.text = text.input.slice(0, text.index)
      } else if (!this.props.data.preview && text && text.index) {
        post.text = text.input.slice(0, text.index) + " " + text.input.slice(text.index + text[0].length)
      }

      if (post.video) {
        return <PostVideo url={`post`} data={post} />
      } else if (post.gallery) {
        return <PostGallery url={`post`} preview={this.props.data.preview} data={post} />
      } else if (post.picture) {
        return <PostPicture url={`post`} preview={this.props.data.preview} data={post} />
      } else if (post.quote) {
        return <PostQuote url={`post`} data={post} />
      } else {
        return <PostDefault url={`post`} preview={this.props.data.preview} data={post} />
      }
    })

    return (
      <div>
        <section className="posts">
          <div className="container">
            {posts}
          </div>
        </section>
      </div>
    )
  }
}

export default class Home extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8"/>
          <title>Document</title>
          <link rel="stylesheet" href="/css/common.css"/>
          <link rel="stylesheet" href="/css/home.css"/>
        </head>
        <body>
          <Navbar archiveLink={true} />
          <Posts data={this.props}/>
          <script src="/js/common.js"></script>
          <script src="/js/home.js"></script>
        </body>
      </html>
    )
  }
}
