var gulp = require('gulp');

var del = require('del');

var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');

var minifyImg = require('gulp-imagemin');

var merge = require('merge-stream');

gulp.task('clean', function(cb) {
	return del(['dist'], cb);
});


gulp.task('default', ['clean'], function() {
	var sources = gulp.src('./*.html')
			.pipe(usemin({
				css: [minifyCss(), 'concat'],
				html: [minifyHtml({empty: true})],
				js: [uglify()]
			}))
			.pipe(gulp.dest('dist/'));

	var images = gulp.src('./assets/img/*')
			.pipe(minifyImg())
			.pipe(gulp.dest('dist/assets/img'));

	var fonts = gulp.src('./assets/fonts/*')
			.pipe(gulp.dest('dist/assets/fonts'));

	return merge(sources, images, fonts);
});
