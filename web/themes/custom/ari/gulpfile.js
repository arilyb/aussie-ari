var gulp = require("gulp");
var clean = require("gulp-clean");
var sass = require("gulp-dart-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require('gulp-sourcemaps');

const src = {
  sassPath: "assets/sass/**/*.scss",
  jsPath: "assets/js/**/*.js",
  distPath: "assets/dist",
  mapPath: ".",
}

// Compile SASS
gulp.task("sass", () => {
  return gulp
    .src(src.sassPath)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(sourcemaps.write(src.mapPath))
    .pipe(gulp.dest(src.distPath))
});

// Compile JS
gulp.task("js", () => {
  return gulp
    .src([
      "node_modules/jquery/dist/jquery.js",
      "node_modules/bootstrap/dist/js/bootstrap.bundle.js",
      src.jsPath,
    ])
    .pipe(sourcemaps.init())
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write(src.mapPath))
    .pipe(gulp.dest(src.distPath))
});


// Clean output directory
gulp.task("clean", () => {
  return gulp.src(src.distPath + "/*", { read: false }).pipe(clean());
});

// Detect Changes
gulp.task("watch", () => {
  gulp.watch(src.sassPath, gulp.series("sass"));
  gulp.watch(src.jsPath, gulp.series("js"));
});

// Run Gulp Magic
gulp.task('default', gulp.series(gulp.parallel('sass', 'js', 'watch')));