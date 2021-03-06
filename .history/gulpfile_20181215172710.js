var gulp = require('gulp');
var uglify = require('gulp-uglify');

// Task for minify files generated by Angular
gulp.task('minifyBundles', function () {
  gulp.src(['./dist/Angular-Lazy-Loading/polyfills.js', 
  './dist/Angular-Lazy-Loading/main.js', 
  './dist/Angular-Lazy-Loading/styles.js', 
  //'./dist/Angular-Lazy-Loading/scripts.js', 
  './dist/Angular-Lazy-Loading/vendor.js',
  './dist/Angular-Lazy-Loading/runtime.js',
  './dist/Angular-Lazy-Loading/*.chunk.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./dist/Angular-Lazy-Loading'));
}); 
gulp.task('default', gulp.series('minifyBundles'));




/* var gulp = require('gulp');
var print = require('gulp-print');

gulp.task('message', function() {
  return gulp.src('package.json')
    .pipe(print(function() { return 'HTTP Server Started'; }));
}); */