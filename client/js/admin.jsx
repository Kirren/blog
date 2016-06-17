import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
require('es6-promise').polyfill()
import loadbar from './lib/loadbar'

// components
import Sidebar from 'components/Sidebar/Sidebar'

// view layers
//import Dashboard from 'views/admin/Dashboard'
import Posts from 'views/admin/Posts'

class Admin extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="main">{this.props.children}</div>
      </div>
    )
  }
}

loadbar()
render(
<Router history={hashHistory}>
  <Route path="/" component={Admin}>
    <IndexRoute path="/posts" component={Posts} />
    <Route path="/posts" component={Posts} />
  </Route>
</Router>
, document.querySelector('#ROOT'))
