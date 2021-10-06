const gulp = require('gulp')
const webserver = require('gulp-webserver')
const {watch} = require('gulp')

function servidor(cb) {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
    watch('src/**/*.html', 
       function(cb) { gulp.series('appHTML')
         cb();
    }());
    watch('src/**/*.scss',
       function(cb) { gulp.series('appCSS')
         cb();
    }());
    watch('src/**/*.js',
       function(cb) { gulp.series('appJS')
         cb();
    }());
    watch('src/assets/imgs/**/*.*',
       function(cb) { gulp.series('appIMG')
         cb();
    }());
    return cb()
}

module.exports = {
    servidor,
    monitorarArquivos
}