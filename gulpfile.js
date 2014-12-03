// requirements
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var browserSync  = require('browser-sync');
var prefix       = require('gulp-autoprefixer');
var rename       = require('gulp-rename');
var minifyCSS    = require('gulp-minify-css');

// create sass tasks
gulp.task('sass', function () {
    gulp.src('scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded', includePaths: ['scss']}))
        .pipe(prefix("last 2 versions", "> 1%", "ie 8", "Android 2", "Firefox ESR"))
        .pipe(gulp.dest('css'))
	.pipe(minifyCSS())
	.pipe(rename({
	            suffix: '.min'
	}))
	.pipe(gulp.dest('css'));
});

// create browser sync task
gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css"], {
        server: {
            baseDir: "./"
        }
    });
});

// default task (just run gulp)
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("scss/**/*.scss", ['sass']);
});
