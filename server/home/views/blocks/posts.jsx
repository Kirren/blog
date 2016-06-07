import React from 'react'

import PostDefault from './posts/preview/post_default.jsx'
import PostGallery from './posts/preview/post_gallery.jsx'
import PostPicture from './posts/preview/post_picture.jsx'
import PostQuote from './posts/preview/post_quote.jsx'
import PostVideo from './posts/preview/post_video.jsx'

export default class Posts extends React.Component {
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
        return <PostVideo data={post} />
      } else if (post.gallery) {
        return <PostGallery preview={this.props.data.preview} data={post} />
      } else if (post.picture) {
        return <PostPicture preview={this.props.data.preview} data={post} />
      } else if (post.quote) {
        return <PostQuote preview={this.props.data.preview} data={post} />
      } else {
        return <PostDefault preview={this.props.data.preview} data={post} />
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
