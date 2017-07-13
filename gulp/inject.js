'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();


gulp.task('inject', ['concatScripts', 'compileSass'], () => {
const injectStyles = gulp.src([
  'stylesheets/**/*.css'
], { read: false });

const injectScripts = gulp.src([
  'js/**/*.js'
]);

return gulp.src('*.php')
  .pipe($.inject(injectStyles))
  .pipe($.inject(injectScripts))
  .pipe(gulp.dest('./'));

});
