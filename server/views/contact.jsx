import React from 'react'

import Navbar from './blocks/navbar'

export default class Contact extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Document</title>
          <link rel="stylesheet" href="/css/common.css"/>
          <link rel="stylesheet" href="/css/contact.css"/>
        </head>
        <body>
          <Navbar contactLink={true} />
          <div className="container">
            <div className="post">
              <div className="post-body">
                <h2 className="post-body__title">
                Contact Us
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe maxime at excepturi rem quo quod deleniti explicabo natus amet modi tempore ratione, expedita, delectus id, doloremque placeat eaque blanditiis illum minus.</span>
                </h2>
                <form action="/contact/sendletter" method="POST" className="post-form">
                  <input placeholder="Your Name" name="name" type="text" id="post-form__name" className="post-form__input"/>
                  <input placeholder="Email" name="email" type="text" id="post-form__email" className="post-form__input"/>
                  <input placeholder="Subject" name="subject" type="text" id="post-form__subject" className="post-form__input"/>
                  <textarea placeholder="Your Message" name="message" id="post-form__textarea" cols="30" rows="10" className="post-form__textarea"></textarea>
                  <button className="post-form__button" type="submit">send message</button>
                </form>
              </div>
            </div>
          </div>
          <script src="/js/common.js"></script>
          <script src="/js/contact.js"></script>
        </body>
      </html>
    )
  }
}
