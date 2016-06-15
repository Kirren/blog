import React from 'react'

import Navbar from './blocks/navbar'

export default class About extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8"/>
          <title>Document</title>
          <link rel="stylesheet" href="/css/common.css"/>
          <link rel="stylesheet" href="/css/about.css"/>
        </head>
        <body>
          <Navbar aboutLink={true} />
          <div className="container">
            <div className="post">
              <div className="post-body">
                <h2 className="post-body__title">
                About
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe maxime at excepturi rem quo quod deleniti explicabo natus amet modi tempore ratione, expedita, delectus id, doloremque placeat eaque blanditiis illum minus.</span>
                </h2>
                <p className="post-body__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias distinctio voluptas quae saepe voluptate qui numquam! Molestiae, sint, reprehenderit. Ipsa animi, vero quis unde eligendi, deserunt totam! Impedit possimus eveniet nihil repellendus. Sapiente ipsum quae repellendus vel exercitationem quasi reiciendis nemo saepe doloribus, optio modi ut veritatis dignissimos dolor, amet, aspernatur non. Tempore provident laudantium dolores recusandae veniam ullam maxime nulla.</p>
                <p className="post-body__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem natus mollitia eveniet nulla ipsam soluta in optio, id temporibus, odio accusantium repudiandae a enim inventore dolores voluptas expedita amet earum obcaecati, assumenda incidunt magnam reiciendis dolorem doloribus maiores. Quisquam veniam, ipsa iusto quia! Esse nobis numquam quae necessitatibus animi quisquam.</p>
              </div>
            </div>
          </div>
          <script src="/js/common.js"></script>
          <script src="/js/about.js"></script>
        </body>
      </html>
    )
  }
}
