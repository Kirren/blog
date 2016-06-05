import React from 'react'

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="load-bar"></div>
        <nav className="navbar">
          <div className="container">
            <div className="col-4">
              <h1 className="navbar-title">Palo Alto</h1>
            </div>
            <div className="col-8">
              <ul className="navbar-menu">
                <li><a href="#1" className="navbar-menu__button navbar-menu__button_active">home</a></li>
                <li><a href="#2" className="navbar-menu__button">about</a></li>
                <li><a href="#3" className="navbar-menu__button">archive</a></li>
                <li><a href="#4" className="navbar-menu__button">contact</a></li>
                <li><a href="#5" className="navbar-menu__button">search</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
