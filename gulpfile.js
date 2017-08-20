var gulp = require('gulp');
var browsersync = require('browser-sync').create();

//删除dist目录下文件
var del=require('del');
gulp.task('clean',function(cb){
    return del(['dist/**'],cb);
})

//操作js文件
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
// var babel = require('gulp-babel');
// var babeles2015 = require('babel-preset-es2015');
var rename = require('gulp-rename');

gulp.task('scripts',function() {
    gulp.src('js/*.js')
		// .pipe(babel({
		// 	presets: ['es2015']
		// }))
		// .pipe(concat('index.js'))
        .pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
        .pipe(browsersync.stream());  //文件有更新自动执行
})


//操作css文件
var cssnano = require('gulp-cssnano');//css压缩插件
var autoprefixer = require('gulp-autoprefixer');//自动处理前缀
var sass=require('gulp-sass');//less文件编译
gulp.task('styles', function() {
    gulp.src('sass/*.scss')
        .pipe(concat('index.scss'))
        .pipe(sass().on('error', sass.logError)) //编译sass文件
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(rename(function (path) {
            path.dirname = path.dirname.replace('scss', 'css')
            }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())//css压缩
        .pipe(gulp.dest('dist/css'))
        .pipe(browsersync.stream());
});


//处理图片
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant'); //png图片压缩插件
gulp.task('images', function () {
     gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()] //使用pngquant来压缩png图片
        }))
        .pipe(gulp.dest('dist/img'))
        .pipe(browsersync.stream());
});



var htmlmin = require('gulp-htmlmin');      //html压缩插件
gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(htmlmin({
            //压缩html
            collapseWhitespace: true,
            //省略布尔属性的值
            collapseBooleanAttributes: true,
            //清除html注释
            removeComments: true,
            //删除所有空格作为属性值
            removeEmptyAttributes: true,
            //删除type=text/javascript
            removeScriptTypeAttributes: true,
            //删除type=text/css
            removeStyleLinkTypeAttributes: true,
            //压缩页面js
            minifyJS:true,
            //压缩页面css
            minifyCSS:true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browsersync.stream());
});

gulp.task('copy', function() {
    gulp.src('lib/**')
        .pipe(gulp.dest('dist/lib'))
        .pipe(browsersync.stream());
})

gulp.task('serve', ['clean'], function() {
    gulp.start('scripts','styles','html','images','copy');
    browsersync.init({
        port: 3000,
        server: {
            baseDir: ['dist']
        }
    });
    gulp.watch('js/*.js', ['scripts']);         //监控文件变化，自动更新
    gulp.watch('sass/*.scss', ['styles']);
    gulp.watch('img/*',['images']);
    gulp.watch('./*.html', ['html']);
});

gulp.task('default',['serve']);