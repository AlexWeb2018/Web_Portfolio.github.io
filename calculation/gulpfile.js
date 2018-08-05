var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var concatCss    = require('gulp-concat-css');


// ��������� ������ + ����������� sass/html �����
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("sass/**/*.sass", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// ����������� sass � CSS � ��������� ��������� � �������
gulp.task('sass', function() {
    return gulp.src("sass/**/*.sass")
        .pipe(sass())
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

/*// ��������� ��� ����� ����� FTP �� �������
gulp.task('ftp', function () {
return gulp.src('src/**')
.pipe(ftp({
    host: '',
    user: '',
    pass: '',
    remotePath: '/'
}))
.pipe(gutil.noop());
});
*/
gulp.task('default', ['serve']);