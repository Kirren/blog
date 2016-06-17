const gulp = require('gulp')
const webpack = require('webpack-stream')
const config = require('./client/config')
const nodemon = require('gulp-nodemon')

const stylus = require('gulp-stylus')
const postcss = require('gulp-postcss')
const cssNano = require('gulp-cssnano')

const plumber = require('gulp-plumber')
const resolve = require('path').resolve
const _if = require('gulp-if')

const isProduction = process.env.NODE_ENV === 'production'

gulp.task('js', () =>
  gulp.src(config.paths.src.js)
    .pipe(webpack(config.webpackConfig))
    .pipe(gulp.dest(config.paths.build.js))
)

gulp.task('css', () =>
  gulp.src(config.paths.src.css)
    .pipe(plumber())
    .pipe(stylus(config.stylus))
    .pipe(postcss(config.postcss))
    .pipe(plumber.stop())
    .pipe(gulp.dest(config.paths.build.css))
)

gulp.task('fonts', () =>
  gulp.src(config.paths.src.fonts)
    .pipe(gulp.dest(config.paths.build.fonts))
)

gulp.task('img', () =>
  gulp.src(config.paths.src.img)
    .pipe(gulp.dest(config.paths.build.img))
)

gulp.task('watch', () => {
  gulp.watch(resolve(__dirname, 'client/js') + '/**/*.*', ['js'])
  gulp.watch(resolve(__dirname, 'client/css') + '/**/*.styl', ['css'])
  gulp.watch(resolve(__dirname, 'client/fonts') + '/**/*.*', ['fonts'])
  gulp.watch(resolve(__dirname, 'client/img') + '/**/*.*', ['img'])
})

gulp.task('server', ['js', 'css', 'fonts', 'img', 'watch'], () => {
  nodemon({
    watch: [
      'server',
      'public'
    ],
    ext: 'js jsx css jpeg jpg png gif svg woff'
  })
})

gulp.task('default', ['server'])

gulp.task('prod', ['js', 'css', 'fonts', 'img'])
