'use strict'

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var jshint = require('gulp-jshint');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('compileSass', function() {

    gulp.src(['./src/sass/style.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/styles'))
        .pipe(browserSync.stream());
    
});

gulp.task('default', ['compileSass'], function() {

    browserSync.init({
        server: './',
    });

    gulp.watch('./src/sass/**/*.scss', ['compileSass']);
    gulp.watch('./*.html', browserSync.reload);
    
});
