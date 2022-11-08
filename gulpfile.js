const { src, dest, series, watch } = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const bulk = require("gulp-sass-bulk-importer");
const prefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const map = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const htmlMin = require("gulp-htmlmin");
const image = require("gulp-image");
const notify = require("gulp-notify");
const uglify = require("gulp-uglify-es").default;
const babel = require("gulp-babel");
const del = require("del");
const imagemin = require("gulp-imagemin");
const webp = require("imagemin-webp");
const extReplace = require("gulp-ext-replace");
const pug = require("gulp-pug");

const clean = () => {
  return del(["dist"]);
};

const resources = () => {
  return src("src/resources/**").pipe(dest("dist"));
};

const htmlMinify = () => {
  return src("src/**/*.html")
    .pipe(
      htmlMin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest("dist"));
};

const html = () => {
  return src("src/**/*.html").pipe(dest("dist")).pipe(browserSync.stream());
};

const pugBuild = () => {
  return src("src/pug/*.pug")
    .pipe(pug())
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
};

const stylesBuild = () => {
  return src("src/styles/**/*.scss")
    .pipe(map.init())
    .pipe(bulk())
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(
      prefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(concat("style.min.css"))
    .pipe(map.write())
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
};

const stylesDev = () => {
  return src("src/styles/**/*.scss")
    .pipe(bulk())
    .pipe(sass())
    .pipe(concat("style.min.css"))
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
};

const images = () => {
  return src([
    "src/img/orig/*.jpg",
    "src/img/**/*.svg",
    "src/img/orig/*.jpeg",
    "src/img/**/*.webp",
  ])
    .pipe(image())
    .pipe(dest("dist/img"));
};

const exportWebP = () => {
  return src(["src/img/**/*.jpg", "src/img/**/*.png", "src/img/**/*.jpeg"])
    .pipe(
      imagemin([
        webp({
          quality: 75,
        }),
      ])
    )
    .pipe(extReplace(".webp"))
    .pipe(dest("dist/img"));
};

const scriptsBuild = () => {
  return src("src/js/**/*.js")
    .pipe(map.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("app.js"))
    .pipe(
      uglify({
        toplevel: 2,
      }).on("error", notify.onError())
    )
    .pipe(map.write())
    .pipe(dest("dist"));
  // .pipe(browserSync.stream())
};

const scriptsDev = () => {
  return src("src/js/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("app.js"))
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  });
};

watch("src/**/*.html", htmlMinify);
watch("src/**/*.html", html);
watch("src/pug/**/*.pug", pugBuild);
watch("src/styles/**/*.scss", stylesBuild);
watch("src/**/*.css", stylesDev);
watch("src/js/**/*.js", scriptsBuild);
watch("src/js/**/*.js", scriptsDev);
watch("src/resources/**", resources);

exports.dev = series(
  clean,
  resources,
  html,
  scriptsDev,
  stylesDev,
  images,
  exportWebP,
  watchFiles
);
exports.default = series(
  clean,
  resources,
  htmlMinify,
  stylesBuild,
  images,
  exportWebP,
  scriptsBuild
  // watchFiles
);
exports.pug = series(
  clean,
  resources,
  pugBuild,
  stylesBuild,
  images,
  exportWebP,
  scriptsBuild,
  watchFiles
);
