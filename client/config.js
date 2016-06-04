// css dependencies
import lost from 'lost'
import rucksack from 'rucksack-css'
import autoprefixer from 'autoprefixer'

// utils
import path from 'path'

export const paths = {
  src: {
    css: [
      path.resolve(__dirname, 'css/common.styl'),
      path.resolve(__dirname, 'css/pages/home/home.styl')
    ],
    fonts: [
      path.resolve(__dirname, 'fonts') + '/*.woff'
    ],
    img: [
      path.resolve(__dirname, 'img') + '/*.+(jpg|jpeg|png|gif|svg)'
    ]
  },
  build: {
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

export const nodemon = {
  watch: [
    'server',
    'public'
  ],
  ext: 'jade css js jpeg jpg png gif svg woff'
}
