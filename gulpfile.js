var gulp = require('gulp');

var fs = require('fs'),
    fileContent = fs.readFileSync('./package.json'),
    jsonObj = JSON.parse(fileContent);

var del = require('del');

var connect           = require('gulp-connect');
var yaml         = require('yamljs');
var path         = require('path');

var argv              = process.argv.pop();
var DEBUGGER          = (argv === "-D" || argv === "-d") ? true : false;

var env               = DEBUGGER ? ".dev" : "";
var config            = yaml.load(path.join(process.cwd(), "etc/config"+ env +".yaml")).config;
var port              = config.port;

//基础变量
var paths = {
    name : jsonObj.name,
    version : jsonObj.version,
    build : './build/' + jsonObj.name
}


gulp.task('clean',function(cb) {
  del(['build','lib'], cb);
});

gulp.task("connect", function(){
  connect.server({
    root : './',
    port : port,
    host: config.host,
    livereload : false
  });
});
gulp.task('default', ['connect']);
