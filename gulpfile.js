const {src,dest,watch} = require('gulp')
const concat = require('gulp-concat')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const pug = require('gulp-pug')
const livereload = require('gulp-livereload')
const sourcemaps = require('gulp-sourcemaps')
const minify = require('gulp-minify')

const rename = require('gulp-rename');
const sassVarsToJs = require('gulp-sass-vars-to-js');
 
function sassvars(){
    return src(['src/css/sass/helpers/_variables.scss'])
            .pipe(sassVarsToJs())
            .pipe(rename('sassvars.ts'))
            .pipe(dest('generated'))
}



// set pug
function pugTask (){
    return src('src/html/pug/*.pug')
            .pipe(pug({
                pretty: true
            }))
            .pipe(dest('dist'))
            .pipe(livereload())
}

// set css
function cssTask (){
    return src(['src/css/**/*.css', 'src/css/**/*.scss'])
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(concat('main.css'))
            .pipe(sourcemaps.write('.'))
            .pipe(dest('dist/css'))
            .pipe(livereload())
}

//set JS
function jsTask(){
    return src('src/js/*.js')
            .pipe(concat('main.js'))
            .pipe(minify())
            .pipe(dest('dist/js'))
            .pipe(livereload())
}
//set Watch
function watcher(){
   
    livereload.listen()
    watch('src/html/pug/**/*.pug', pugTask)
    watch(['src/css/**/*.css', 'src/css/**/*.scss'], cssTask)
    watch(['src/css/sass/helpers/_variables.scss'], sassvars)
    watch('src/js/*.js', jsTask)
}
module.exports = {
    watch: watcher
}