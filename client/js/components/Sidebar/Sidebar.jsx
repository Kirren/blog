import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <input id="sidebar-trigger" type="checkbox"/>
        <label htmlFor="sidebar-trigger">
          <div className="sidebar-toggle-button">Menu</div>
        </label>
        <div className="sidebar">
          <div className="sidebar__title">Palo Alto</div>
          <div className="menu">
            <Link activeClassName="menu__button_active" to="/posts" className="menu__button"> <span>Articles</span> </Link>
            <Link activeClassName="menu__button_active" to="/faq" className="menu__button"> <span>FAQ</span> </Link>
          </div>
          <a href="/admin/logout" className="sidebar__logout"> <span>log out</span> </a>
        </div>
      </div>
    )
  }
}
