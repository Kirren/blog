import gulp from 'gulp'
import * as config from './client/config'
import nodemon from 'gulp-nodemon'

import stylus from 'gulp-stylus'
import postcss from 'gulp-postcss'

import plumber from 'gulp-plumber'
import path from 'path'

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
  gulp.watch(path.resolve(__dirname, 'client/css') + '/**/*.styl', ['css'])
  gulp.watch(path.resolve(__dirname, 'client/fonts') + '/**/*.*', ['fonts'])
  gulp.watch(path.resolve(__dirname, 'client/img') + '/**/*.*', ['img'])
})

gulp.task('server', ['css', 'fonts', 'img', 'watch'], () => {
  nodemon(config.nodemon)
})

gulp.task('default', ['server'])
