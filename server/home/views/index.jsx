import React from 'react'

// components
import Navbar from './blocks/navbar.jsx'
import Posts from './blocks/posts.jsx'

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
          <Navbar />
          <Posts data={this.props}/>
          <script src="/js/common.js"></script>
          <script src="/js/home.js"></script>
        </body>
      </html>
    )
  }
}
