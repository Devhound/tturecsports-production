'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
const $ = require('gulp-load-plugins')();

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

// Runs the working JS file through Babel so we can write in ES6
gulp.task("babelScripts", () => {
  return gulp.src(['js/rec.js'])
             .pipe($.babel({
                presets: ['es2015']
             }))
             .pipe($.rename('rec-babel.js'))
             .pipe(gulp.dest('js'))
});

// Minifies and combines all JS files into one file
gulp.task("concatScripts", ["babelScripts"], () => {
   return gulp.src([
                'js/jquery-2.1.1.js',
                'js/jquery.mobile.custom.js',
                'js/modernizr.js',
                'js/scroll.js',
                'js/classie.js',
                'js/stickykit.js',
                'js/wow.js',
                'js/main.js',
                'js/slick.min.js',
                'js/jquery.waitforimages.min.js',
                'js/jquery.prettyembed.min.js',
                'js/rec-babel.js'
                ])
            .pipe($.inject(injectFiles, injectOptions))
            .pipe($.sourcemaps.init())
            .pipe($.concat('app.js'))
            .pipe($.sourcemaps.write('./'))
            .pipe(gulp.dest('js'))
            .pipe(browserSync.reload({ stream: true }));
});

// Minifies all JS after they're put together
// TODO: Get jQuery working
// NOTE: This will minify the scripts but doesn't work in browser. Babel is breaking jQuery.
//       Maybe order/function hoisting?
gulp.task("minifyScripts", ["concatScripts"], () => {
 return gulp.src("js/app.js")
            .pipe($.babel({
               presets: ['es2015']
             }))
            .pipe($.uglify({compress: { drop_console: true, hoist_funs: false }}).on('error', function(err) {
               $.util.log($.util.colors.red('[Error]'), err.toString());
               this.emit('end');
               }))
            .pipe($.rename('app.min.js'))
            .pipe(gulp.dest('js'));
});
