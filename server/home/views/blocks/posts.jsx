import React from 'react'

import PostDefault from './posts/preview/post_default.jsx'
import PostGallery from './posts/preview/post_gallery.jsx'
import PostPicture from './posts/preview/post_picture.jsx'
import PostQuote from './posts/preview/post_quote.jsx'
import PostVideo from './posts/preview/post_video.jsx'

export default class Posts extends React.Component {
  render() {
    let prev = this.props.data.page - 1
    let curr = this.props.data.page
    let next = this.props.data.page + 1
    let regexp = /\[INTRO: END]/
    let posts = this.props.data.posts.map((post) => {
      let text = regexp.exec(post.text) || null
      if (this.props.data.preview && text && text.index) {
          post.text = text.input.slice(0, text.index)
      } else if (!this.props.data.preview && text && text.index) {
        post.text = text.input.slice(0, text.index) + " " + text.input.slice(text.index + text[0].length)
      }

      if (post.video) {
        return <PostVideo url={curr} data={post} />
      } else if (post.gallery) {
        return <PostGallery url={curr} preview={this.props.data.preview} data={post} />
      } else if (post.picture) {
        return <PostPicture url={curr} preview={this.props.data.preview} data={post} />
      } else if (post.quote) {
        return <PostQuote url={curr} data={post} />
      } else {
        return <PostDefault url={curr} preview={this.props.data.preview} data={post} />
      }
    })

    let prevButton = (prev > 0) ? <a href={`/${prev}`} className="pagination__btn pagination__btn_prev">prev</a> : null
    let currButton = <a href={`/${curr}`} className="pagination__btn pagination__btn_curr">{curr}</a>
    let nextButton = (posts.length + 1 > 5 && this.props.data.nextPosts) ? <a href={`/${next}`} className="pagination__btn pagination__btn_next">next</a> : null
    let pagination = (this.props.data.preview) ? <div className="pagination">{prevButton}{currButton}{nextButton}</div> : null

    return (
      <div>
        <section className="posts">
          <div className="container">
            {posts}
            {pagination}
          </div>
        </section>
      </div>
    )
  }
}
