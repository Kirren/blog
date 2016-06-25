import React from 'react'

export default class Login extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Document</title>
          <link rel="stylesheet" href="/css/common.css"/>
          <link rel="stylesheet" href="/css/login.css"/>
        </head>
        <body>
          <div className="login">
            <form className="login__form" action="/login" method="POST">

              <div className="login__labels">
                <label className="login__label">
                  <span>Login:</span>
                  <input name="username" type="text" className="login__input"/>
                </label>
                <label className="login__label">
                  <span>Password:</span>
                  <input name="password" type="password" className="login__input"/>
                </label>
              </div>

              <div className="login__buttons">
                <button className="login__button" type="submit">log in</button>
                <a className="login__button" href="/">exit</a>
              </div>

            </form>
          </div>
          <script src="/js/vendor.js"></script>
          <script src="/js/common.js"></script>
          <script src="/js/login.js"></script>
        </body>
      </html>
    )
  }
}
