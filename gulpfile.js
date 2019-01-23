const { parallel, src, dest, watch } = require('gulp');

const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

function lint() {
	return src('assets/scripts/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
}

function scripts() {
	return src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/velocity-animate/velocity.min.js', 'node_modules/velocity-ui-pack/velocity.ui.min.js', 'node_modules/slick-carousel/slick/slick.min.js', 'assets/scripts/js/tinypubsub.js', 'assets/scripts/js/breakpoints.js', 'assets/scripts/js/parallax.js', 'assets/scripts/js/parallaxFG.js', 'assets/scripts/js/inview.js', 'assets/scripts/js/youtubeplayer.js', 'assets/scripts/js/main.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(dest('assets/scripts'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(dest('assets/scripts'));
}

function watchFiles() {
	watch('assets/scripts/js/*.js', parallel(lint, scripts));
}

exports.watch = watchFiles;
exports.default = parallel(lint, scripts);