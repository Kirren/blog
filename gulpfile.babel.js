import gulp from 'gulp'
import webpack from 'webpack-stream'
import * as config from './client/config'
import nodemon from 'gulp-nodemon'

import stylus from 'gulp-stylus'
import postcss from 'gulp-postcss'
import cssNano from 'gulp-cssnano'

import plumber from 'gulp-plumber'
import path from 'path'

import _if from 'gulp-if'

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
    .pipe(_if(isProduction, cssNano({
      safe: true
    })))
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
  gulp.watch(path.resolve(__dirname, 'client/js') + '/**/*.*', ['js'])
  gulp.watch(path.resolve(__dirname, 'client/css') + '/**/*.styl', ['css'])
  gulp.watch(path.resolve(__dirname, 'client/fonts') + '/**/*.*', ['fonts'])
  gulp.watch(path.resolve(__dirname, 'client/img') + '/**/*.*', ['img'])
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
