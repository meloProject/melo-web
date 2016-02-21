"use strict";
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const globify = require('require-globify');
const duration = require('gulp-duration');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream'); 
const buffer = require('vinyl-buffer');
const notify = require('gulp-notify');
const debug = require('gulp-debug');
const colors = require('colors');
const tsify = require('tsify');

class BundlerTs {
    constructor(browserSync, gulp) {

        /* 
         se podria mejorar evitando ejecutar updates muy rapidos
         prever que se ejecute otro evento de compilacion mietras se esta ejecutando uno por el mismo
         mismo achivo.
        */
        this.browserSync = browserSync;
        this.gulp = gulp;
        this.browserOpenControl = 0;
        this.initialFile = './public/meloSc.ts';
        this.outputFolder= './public/builds';
        this.sourceMaps = './';
        this.bSync = Function;
        this.port = 8000;

        // set bundle
        this.bundle = browserify({
            entries: this.initialFile,
            plugin: [watchify, tsify],
            cache: {},
            packageCache: {},
            fullPaths: true,
            debug: true
        })
        .transform(babelify, {
            presets: ['es2015', 'stage-0'],
            sourceMaps: true,
            extensions: ['.ts', '.js'] ,
            plugins: ["transform-runtime"]
        })
        .on('transform', this.onTransformEvent)
        .on('update', ()=> { this.onUpdate(); }) // send context
        .on('time', (time)=> { this.onTime(time); });

        this.build(this.bundle);
    }

    build(bundle) {
        return bundle.bundle()
        .on('error', this.onError)
        .pipe(source('melosc.js')) // Set source file name
        .pipe(buffer()) // Convert to gulp pipeline
        .pipe(sourcemaps.init({loadMaps: true})) // Extract the inline sourcemaps
        //.pipe(uglify()) // enable for compression
        .pipe(duration('Finish uglify'))
        .pipe(sourcemaps.write(this.sourceMaps)) // Set folder for sourcemaps to output to
        //.pipe(debug({title: 'unicorn:'})) 
        .pipe(this.gulp.dest(this.outputFolder)) // Set the output folder
        .pipe(notify({
            message: 'Generated file: <%= file.relative %>',
            sound: false
        }));
    }

    onTransformEvent(tr) {
        if (tr instanceof babelify) {
                tr.once('babelify', (result, filename)=> {
                    console.log('[ COMPILING ] -> ' + filename .yellow); // => { code, map, ast, metadata }
            });
        }
    }

    onUpdate() {
        console.log('[ REBUILD SEND ]' .yellow);
        this.build(this.bundle);
    }

    onError(err) {
        notify.onError({
            title: "Gulp Error",
            message: '<%= file.relative %>' + err,
            sound: "Bottle"
        })('err');
    }

    onTime(time) {
         if(!this.browserOpenControl) {
                this.browserOpenControl++;
                console.log(`   --------------------- COMPILED ${time} ms ---------------------`);
                if(typeof this.bSync === 'function') this.bSync();
            } else {
                duration('globify file');
                console.log(`   --------------------- COMPILED ${time} ms ---------------------`);
                this.browserSync.reload();
            }
    } 
}

module.exports = BundlerTs;