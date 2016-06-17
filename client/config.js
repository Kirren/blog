const webpack = require('webpack')
const resolve = require('path').resolve

// css dependencies
const lost = require('lost')
const rupture = require('rupture')
const rucksack = require('rucksack-css')
const autoprefixer = require('autoprefixer')

module.exports.paths = {
  src: {
    js: resolve(__dirname, 'js/home.js'),
    css: [
      resolve(__dirname, 'css/common.styl'),
      resolve(__dirname, 'css/pages/home/home.styl'),
      resolve(__dirname, 'css/pages/admin/admin.styl'),
      resolve(__dirname, 'css/pages/login/login.styl'),
      resolve(__dirname, 'css/pages/search/search.styl'),
      resolve(__dirname, 'css/pages/archive/archive.styl'),
      resolve(__dirname, 'css/pages/about/about.styl'),
      resolve(__dirname, 'css/pages/contact/contact.styl')
    ],
    fonts: [
      resolve(__dirname, 'fonts') + '/*.woff'
    ],
    img: [
      resolve(__dirname, 'img') + '/*.+(jpg|jpeg|png|gif|svg)'
    ]
  },
  build: {
    js: resolve(__dirname, '../public/js/'),
    css: resolve(__dirname, '../public/css/'),
    fonts: resolve(__dirname, '../public/fonts/'),
    img: resolve(__dirname, '../public/img/')
  }
}

module.exports.stylus = {
  'include css': true,
  use: [rupture()],
  import: ['rupture', resolve(__dirname, 'css/variables.styl') ]
}

module.exports.postcss = [
  lost(),
  rucksack(),
  autoprefixer()
]

const webpackConfig = {
  resolve: {
    extensions: ['', '.jsx', '.js'],
    alias: {
      components: resolve(__dirname, 'js/components'),
      views: resolve(__dirname, 'js/views')
    }
  },
  context: resolve(__dirname, 'js'),
  entry: {
    home: ['./home'],
    admin: ['./admin'],
    login: ['./login'],
    search: ['./search'],
    archive: ['./archive'],
    about: ['./about'],
    contact: ['./contact'],
    vendor: ['react', 'react-dom',  'es6-promise', 'axios']
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: resolve(__dirname, 'js'),
        loader: 'babel',
        babelrc: false,
        query: {
          presets: ["stage-0", "es2015", "react"]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor' ,'common.js'),
    new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
  ]
}

if (process.env.NODE_ENV === 'production') {
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}

module.exports.webpackConfig = webpackConfig
