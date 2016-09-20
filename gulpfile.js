/// <binding BeforeBuild='default' />
var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var typescript = require('gulp-tsc');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var uglify = require('gulp-uglify');
var tsProject = tsc.createProject('tconfig.json');
var tsTestProject = tsc.createProject('tconfig.json');
var rimraf = require('gulp-rimraf');
var minifyHTML = require('gulp-htmlmin');
var templates = require('gulp-angular-templatecache');
var inject = require('gulp-inject');
var ngAnnotate = require('gulp-ng-annotate');
var addStream = require('add-stream');
var Karma = require('karma').Server;
var path = require('path');

var paths = {
    sass: ['./scss/**/*.scss'],
    src: ['./source/*.ts']
};

gulp.task('default', ['sass']);

gulp.task('compile', function() {
    gulp.src(paths.src)
    .pipe(typescript({
        emitError: false
    }))
    .pipe(gulp.dest('./www/js/'))
});

gulp.task('lint', function () {
    return gulp.src([
      'source/**.ts'
    ])
      .pipe(tslint({}))
      .pipe(tslint.report('verbose'));
});

gulp.task('compile-app', function () {
    var libraryName = 'ionicSideMenu';
    var outputFileName = libraryName + '.min.js';

    return gulp.src([
      'source/**.ts',
      'www/data/*.json',
      'typings/tsd.d.ts/'
    ])
      .pipe(sourcemaps.init())
      .pipe(tsc(tsProject))
      .pipe(addStream.obj(prepareTemplates()))
      .pipe(concat(outputFileName))
      .pipe(ngAnnotate())
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('www/js'));
});

gulp.task('clean', function () {
    return gulp.src(['www/js', 'www/css'], { read: false })
      .pipe(rimraf());
});

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.src, ['compile']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

function prepareTemplates() {
    return gulp.src(['./www/templates/**/**/*.html', './www/templates/*.html', , '!./www/index.html'])
      .pipe(minifyHTML({
          collapseWhitespace: true
      }))
      .pipe(templates('templates.js', {
          module: 'sidemenu.templates',
          standalone: true
      }));
}
