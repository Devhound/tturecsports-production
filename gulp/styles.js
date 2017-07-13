'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
const lost = require('lost');
const autoprefixer = require('autoprefixer');
const $ = require('gulp-load-plugins')();

// Compiles all the Sass
gulp.task('compileSass', () => {

    const sassOptions = {
        style: 'expanded'
    };

    const injectFiles = gulp.src([
        'stylesheets/**/*.scss'
    ], { read: false });

    const injectOptions = {
      transform: filePath => {
        return '@import \'' + filePath + '\';';
      },
      starttag: '// injector',
      endtag: '// endinjector',
      addRootSlash: false
    };

    return gulp.src("./stylesheets/scss/styles.scss")
               .pipe($.inject(injectFiles, injectOptions))
               .pipe($.sourcemaps.init())
               .pipe($.sass(sassOptions).on('error', $.sass.logError))
               .pipe($.postcss([
                   lost(),
                   autoprefixer()
               ]))
               .pipe($.sourcemaps.write('./'))
               .pipe(gulp.dest('stylesheets'))
               .pipe(browserSync.reload({stream: true}));
});
