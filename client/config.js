import webpack from 'webpack'

// css dependencies
import lost from 'lost'
import rucksack from 'rucksack-css'
import autoprefixer from 'autoprefixer'

// utils
import path from 'path'

export const paths = {
  src: {
    js: path.resolve(__dirname, 'js/home.js'),
    css: [
      path.resolve(__dirname, 'css/common.styl'),
      path.resolve(__dirname, 'css/pages/home/home.styl'),
      path.resolve(__dirname, 'css/pages/admin/admin.styl')
    ],
    fonts: [
      path.resolve(__dirname, 'fonts') + '/*.woff'
    ],
    img: [
      path.resolve(__dirname, 'img') + '/*.+(jpg|jpeg|png|gif|svg)'
    ]
  },
  build: {
    js: path.resolve(__dirname, '../public/js/'),
    css: path.resolve(__dirname, '../public/css/'),
    fonts: path.resolve(__dirname, '../public/fonts/'),
    img: path.resolve(__dirname, '../public/img/')
  }
}

export const stylus = {
  'include css': true,
  import: [ path.resolve(__dirname, 'css/variables.styl') ]
}

export const postcss = [
  lost(),
  rucksack(),
  autoprefixer()
]

export const webpackConfig = {
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  context: path.resolve(__dirname, 'js'),
  entry: {
    home: ['./home'],
    admin: ['./admin']
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: path.resolve(__dirname, 'js'),
        loader: 'babel',
        babelrc: false,
        query: {
          presets: ["stage-0", "es2015", "react"]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ]
}
