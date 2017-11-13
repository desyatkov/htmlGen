var gulp = require("gulp"),
  handlebars = require("gulp-compile-handlebars"),
  rename = require("gulp-rename"),
  products = require("./db.json");

gulp.task("handlebars", function() {

for (let i = 0; i < products.content.length; i++) {
    let product = products.content[i].product;
    const fileName = products.content[i].name;

    gulp
      .src("templates/*.handlebars")
      .pipe(handlebars(product))
      .pipe(rename(fileName + ".html"))
      .pipe(gulp.dest("build/"));
  }
});

gulp.task("default", ["handlebars"]);