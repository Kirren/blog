import React from 'react'

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="load-bar"></div>
        <nav className="navbar">
          <div className="container">
            <div className="col-4">
              <h1 className="navbar-title">Your Blog</h1>
            </div>
            <div className="col-8">
              <ul className="navbar-menu">
                <li><a href="/" className="navbar-menu__button navbar-menu__button_active">home</a></li>
                <li><a href="/about" className="navbar-menu__button">about</a></li>
                <li><a href="/archive" className="navbar-menu__button">archive</a></li>
                <li><a href="/contact" className="navbar-menu__button">contact</a></li>
                <li><a href="/search" className="navbar-menu__button">search</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
