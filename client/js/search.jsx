import React, { Component } from 'react'
import { render } from 'react-dom'
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

render (<Search />, ROOT)
