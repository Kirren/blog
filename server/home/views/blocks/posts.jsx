import React from 'react'

import PostDefault from './posts/preview/post_default.jsx'
import PostGallery from './posts/preview/post_gallery.jsx'
import PostPicture from './posts/preview/post_picture.jsx'
import PostQuote from './posts/preview/post_quote.jsx'
import PostVideo from './posts/preview/post_video.jsx'

export default class Posts extends React.Component {
  render() {
    let posts = this.props.data.posts.map((post) => {
      if (post.video) {
        return <PostVideo data={post} />
      } else if (post.gallery) {
        return <PostGallery data={post} />
      } else if (post.picture) {
        return <PostPicture data={post} />
      } else if (post.quote) {
        return <PostQuote data={post} />
      } else {
        return <PostDefault data={post} />
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
