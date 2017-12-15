var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

var config = {
	less: './less',
	css: './static/css'
}

gulp.task('less', function () {
	return gulp.src(config.less + '/style.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(autoprefixer("last 1 version", "> 0.5%"))
		.pipe(gulp.dest(config.css));
});

gulp.task('watch', function () {
	gulp.watch(config.less + '/**/*.less', ['less']);

	//refresh only files that change
	return gulp.src(config.css + '**/*.css')
		.pipe(watch(config.less + '/**/*.css'))
		.pipe(livereload({ start: true }));
});

gulp.task('default', ['less', 'watch']);