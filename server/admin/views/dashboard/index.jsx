import React from 'react'

import Sidebar from './blocks/sidebar.jsx'
import Main from './blocks/main.jsx'

export default class AdminPosts extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8"/>
          <title>Document</title>
          <link rel="stylesheet" href="/css/common.css"/>
          <link rel="stylesheet" href="/css/admin.css"/>
        </head>
        <body>
          <Sidebar />
          <Main />
        </body>
      </html>
    )
  }
}
