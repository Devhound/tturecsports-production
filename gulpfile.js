'use strict';

const      gulp = require('gulp'),
          gutil = require('gulp-util'),
            del = require('del'),
    browserSync = require('browser-sync').create(),
     requireDir = require('require-dir');

// Requiring all gulp task files from /gulp/
requireDir( './gulp', { recurse: true } );


// Starts Browser Sync server
gulp.task('browser-sync', () => {
    return browserSync.init(["stylesheets/**/*.css", "js/**/*.js", "**/*.php"], {
        injectChanges: true,
        proxy: "5.5.5.5" // CHANGE THIS URL TO YOUR LOCAL SERVER'S URL
    });
});


// Cleans all the distribution files
gulp.task( 'clean', () => del(['dist', 'stylesheets/application.css*', 'js/app*.js*']) );


// Builds and sends all the files to the distribution folder
gulp.task("build", ['concatScripts', 'compileSass'], () => {
  return gulp.src(["stylesheets/styles.css", "stylesheets/styles.css.map", "stylesheets/ttu.min.css",
             "js/app.js", "js/app.js.map", 'index.php', "images/**", "includes/**"], { base: './'})
             .pipe(gulp.dest('dist'));
});


// Default task that cleans and exports for distribution
gulp.task('default', ['clean'], () => gulp.start('build'));
