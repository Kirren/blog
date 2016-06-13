import React from 'react'

import NavBar from './blocks/navbar.jsx'

export default class Search extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8"/>
          <title>Document</title>
          <link rel="stylesheet" href="/css/common.css"/>
          <link rel="stylesheet" href="/css/search.css"/>
        </head>
        <body>
          <NavBar searchLink={true} />
          <div id="ROOT"></div>
          <script src="/js/common.js"></script>
          <script src="/js/search.js"></script>
        </body>
      </html>
    )
  }
}