import React from 'react'

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__title">Palo Alto</div>
        <div className="menu">
          <a href="/admin" className="menu__button menu__button_active">
            <span>Dashboard</span>
          </a>
          <a href="/admin/posts" className="menu__button">
            <span>Articles</span>
          </a>
          <a href="/admin" className="menu__button">
            <span>FAQ</span>
          </a>
        </div>
        <a href="#logout" className="sidebar__logout">
          <span>log out</span>
        </a>
      </div>
    )
  }
}
