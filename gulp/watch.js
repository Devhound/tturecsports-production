'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
const del = require('del');
const $ = require('gulp-load-plugins')();

function isOnlyChange(event) {
  return event.type === 'changed';
}

// Watch for changes and update files
gulp.task('watch', ['browser-sync', 'inject'], () => {

  // Removing the default apache index.html file
  del(['index.html']);

  // Watching CSS
  gulp.watch([
      'stylesheets/**/*.css',
      'stylesheets/scss/**/*.scss'
    ],
    event => {
      if(isOnlyChange(event)) {
          gulp.start('compileSass');
        } else {
          gulp.start('inject');
        }
    });

  // Watching JS
  gulp.watch('js/**/*.js',
    event => {
        if(isOnlyChange(event)) {
          gulp.start('concatScripts');
        } else {
          gulp.start('inject');
        }
    });

  gulp.watch('/*.php', event => {
      console.log(event.path);
      browserSync.reload();
    });
});
