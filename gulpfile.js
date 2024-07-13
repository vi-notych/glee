const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');

// функция отвечает за сборку скриптов
function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
    'app/js/mixitup.min.js',
    'app/js/main.js',
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify()) // минификация скриптов
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 version'],
      grid: true
    }))
    .pipe(concat('style.min.css'))
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function images() {
  return src('app/images/**/*.*')
    .pipe(imagemin())
    .pipe(dest('dist/images'))
}

function watching() {
  watch(['app/scss/style.scss'], styles)
  watch(['app/js/main.js'], scripts)
  watch(['app/*.html']).on('change', browserSync.reload);
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
}

function cleanDist() {
  return src('dist', { "allowEmpty": true })
    .pipe(clean())
}

function building() {
  return src([
    'app/css/style.min.css',
    'app/js/main.min.js',
    'app/**/*.html'
  ], { base: 'app' })
    .pipe(dest('dist'))
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;
exports.images = images;


exports.build = series(cleanDist, images, building);
exports.default = parallel(styles, scripts, browsersync, watching);
