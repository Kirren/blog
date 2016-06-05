import React from 'react'

export default class Main extends React.Component {
  render() {
    let posts = this.props.data.posts.map((post) => {
      let title = (post.title) ? <td className="main-menu-item__title">{post.title}</td> : null
      let quote = (post.quote) ? <td className="main-menu-item__title">{post.quote}'s quote.</td> : null
      return <tr className="main-menu-item">
        <td className="main-menu-item__date">{post.date}</td>
        {title}
        {quote}
        <td className="main-menu-item__edit">Edit</td>
      </tr>
    })
    return (
      <div>
        <div className="main">
          <div className="main-topbar">
            <form action="/admin/posts/add" method="GET" className="main-topbar__form">
              <button className="main-topbar__button" type="submit">Add</button>
            </form>
            <form action="/admin/posts/search" method="GET" className="main-topbar__form">
              <button className="main-topbar__button" type="submit">Search</button>
            </form>
          </div>
          <table className="main-menu">
            <tbody>
              {posts}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
