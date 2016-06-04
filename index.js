require('babel-core/register')({
  presets: ['node6'],
  babelrc: false,
  env: {
    production: {
      minified: true
    }
  }
})
require('babel-polyfill')
require('./server')
