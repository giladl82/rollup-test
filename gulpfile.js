const gulp = require( 'gulp' )
const shell = require( 'gulp-shell' )

function replaceBS ( path ) {
  return path
}

gulp.task( 'default', () => {
  return gulp.src( [ 'src/**/*.js', '!src/**/*.test.js' ], { read: false } )
    .pipe( shell( [
      "rollup <%= file.path %> --file <%= file.path.replace('src','dist') %> -f cjs -c -m"
    ] ) )
} )

// rollup src/index.js --file dist/index.js -f cjs -c -m