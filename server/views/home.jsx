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
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Document</title>
          <link rel="stylesheet" href="/css/common.css"/>
          <link rel="stylesheet" href="/css/home.css"/>
        </head>
        <body>
          <Navbar homeLink={true} />
          <Posts data={this.props}/>
          <script src="/js/vendor.js"></script>
          <script src="/js/common.js"></script>
          <script src="/js/home.js"></script>
        </body>
      </html>
    )
  }
}
