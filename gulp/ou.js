'use strict';

const gulp = require('gulp');
const del = require('del');
const lost = require('lost');
const autoprefixer = require('autoprefixer');
const $ = require('gulp-load-plugins')();


// Runs the working JS file through Babel so we can write in ES6
gulp.task("ouBabel", () => {
  return gulp.src(['js/rec.js'])
             .pipe($.babel({
                presets: ['es2015']
             }))
             .pipe($.rename('rec-babel.js'))
             .pipe(gulp.dest('js'))
});

// Minifies and combines all JS files into one file
gulp.task("ouScripts", ["babelScripts"], () => {
   return gulp.src([
                'js/slick.min.js',
                'js/jquery.waitforimages.min.js',
                'js/jquery.prettyembed.min.js',
                'js/rec-babel.js'
                ])
            .pipe($.sourcemaps.init())
            .pipe($.concat('app.js'))
            .pipe($.sourcemaps.write('./'))
            .pipe(gulp.dest('ou/js'));
});

// Compiles all the Sass
gulp.task('ouSass', () => {

    const sassOptions = {
        style: 'expanded' // nested | expanded | compact | compressed
    };

    return gulp.src("./stylesheets/scss/styles.scss")
               .pipe($.sourcemaps.init())
               .pipe($.sass(sassOptions).on('error', $.sass.logError))
               .pipe($.postcss([
                   lost(),
                   autoprefixer()
               ]))
               .pipe($.sourcemaps.write('./'))
               .pipe(gulp.dest('ou/stylesheets'));
});

// Cleans all the OU files
gulp.task( 'ouClean', () => del(['ou']) );

// Builds and sends all the files to OU
gulp.task("ouBuild", ['ouScripts', 'ouSass'], () => {
  return gulp.src(['index.php', "images/**"], { base: './'})
             .pipe(gulp.dest('ou'));
});

// Task that cleans and exports for OU
gulp.task('ou', ['ouClean'], () => gulp.start('ouBuild'));
