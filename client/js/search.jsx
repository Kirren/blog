import React, { Component } from 'react'
import { render } from 'react-dom'
import loadbar from './lib/loadbar'
require('es6-promise').polyfill()
const ROOT = document.querySelector('#ROOT')

// view layers
import Main from 'views/search/Main'

class Search extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
}

loadbar()
render (<Search />, ROOT)
