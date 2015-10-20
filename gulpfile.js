/* File: gulpfile.js */
//https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});







// var http = require('http');
 
// //declare the task
// gulp.task('server', function(done) {
//   //start an http server (I know, a totally useless example, but helps to illustrate the point)
//   var requestListener = function (req, res) {
//     res.writeHead(200);
//     res.end('Hello, World!\n');
//   }
  
//   var server = http.createServer(requestListener);
//   server.listen(8080);
  
//   done();
// });

