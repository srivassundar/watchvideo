// requirements
const gulp = require('gulp');
const gulpBrowser = require('gulp-browser');
const del = require('del');
const size = require('gulp-size');
const rename = require('gulp-rename');

gulp.task('default', ['del'], () => {
  gulp.start('transform');
  gulp.watch('./project/static/scripts/jsx/*.jsx', ['transform']);
});

gulp.task('transform', () => {
  gulp.src('./project/static/scripts/jsx/*.jsx')
    .pipe(gulpBrowser.browserify({
      transform: 'babelify',
      options: {
        presets: ['es2015', 'react'],
      },
    }))
    .pipe(rename((path) => {
      path.extname = '.js'; // eslint-disable-line no-param-reassign
    }))
    .pipe(gulp.dest('./project/static/scripts/js/'))
    .pipe(size());
});

gulp.task('del', () => del(['./project/static/scripts/js']));
