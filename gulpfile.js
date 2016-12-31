// requirements
const gulp = require('gulp');
const gulpBrowser = require('gulp-browser');
const del = require('del');
const size = require('gulp-size');

gulp.task('default', ['del'], () => {
  gulp.start('transform');
  gulp.watch('./project/static/scripts/jsx/*.js', ['transform']);
});

gulp.task('transform', () =>
  gulp.src('./project/static/scripts/jsx/*.js')
    .pipe(gulpBrowser.browserify({
      transform: 'babelify',
      options: {
        presets: ['es2015', 'react'],
      },
    }))
    .pipe(gulp.dest('./project/static/scripts/js/'))
    .pipe(size()),
);

gulp.task('del', () => del(['./project/static/scripts/js']));
