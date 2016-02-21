"use strict";

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var bundlerRs = require('./tasks/bundler');

var cnBundle = require('./tasks/bundlerTs');
var scBundle = require('./tasks/bundlerSc');

var notify = require('gulp-notify');

gulp.task('default', ['start']);
gulp.task('start', ()=> {
    let tsBundleTouch = new cnBundle(browserSync, gulp, './public/meloCn.ts', 'melocn.js');
    let tsBundleScreen = new scBundle(browserSync, gulp, './public/meloSc.ts', 'melosc.js');
    let bundler = new bundlerRs(browserSync, gulp);
    bundler.bSync = r => gulp.start(['bsync']);
    return bundler;
});

// Static Server + watching scss/html files
gulp.task('bsync', ['sass'], function() {
    gulp.watch('./public/stylesheets/melo/stylecore/modules/**/*.sass', ['sass']);
    //gulp.watch('./client/views/*.jsx').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./public/stylesheets/melo/main.sass")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./public/stylesheets/melo/stylecore/css"))
        .pipe(browserSync.stream())
        .pipe(notify({
            message: 'sass compiled send stram: <%= file.relative %>',
            sound: false
        }));
});

// gulp.task('compileSass', function () {
//    return gulp.watch('./public/stylesheets/**/*.sass', ['sass'])
//    .on('change', function (event) {
//        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//    });
// });




