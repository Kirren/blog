import React from 'react'

export default class Navbar extends React.Component {
  render() {
    const homeLink = this.props.homeLink && 'navbar-menu__button_active' || ''
    const aboutLink = this.props.aboutLink && 'navbar-menu__button_active' || ''
    const archiveLink = this.props.archiveLink && 'navbar-menu__button_active' || ''
    const contactLink = this.props.contactLink && 'navbar-menu__button_active' || ''
    const searchLink = this.props.searchLink && 'navbar-menu__button_active' || ''
    return (
      <div>
        <nav className="navbar">
          <div className="container">
            <div className="col-4">
              <h1 className="navbar-title">Your Blog</h1>
            </div>
            <div className="col-8">

              <input id="menu-trigger" className="navbar-menu-trigger" type="checkbox"/>
              <label htmlFor="menu-trigger">
                <div className="navbar-menu-button"></div>
              </label>

              <ul className="navbar-menu">
                <li><a href="/" className={`navbar-menu__button ${homeLink}`}>home</a></li>
                <li><a href="/about" className={`navbar-menu__button ${aboutLink}`}>about</a></li>
                <li><a href="/archive" className={`navbar-menu__button ${archiveLink}`}>archive</a></li>
                <li><a href="/contact" className={`navbar-menu__button ${contactLink}`}>contact</a></li>
                <li><a href="/search" className={`navbar-menu__button ${searchLink}`}>search</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
