import React from 'react'

export default class Admin extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Document</title>
          <link rel="stylesheet" href="/css/common.css"/>
          <link rel="stylesheet" href="/css/admin.css"/>
        </head>
        <body>
          <div id="ROOT"></div>
          <script src="/js/vendor.js"></script>
          <script src="/js/common.js"></script>
          <script src="/js/admin.js"></script>
        </body>
      </html>
    )
  }
}
