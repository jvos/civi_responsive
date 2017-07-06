module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: 'css/sources/partials/*.scss',
                tasks: ['sass:dev']
            },
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    require: ['breakpoint'],
                    loadPath: 'node_modules/bootstrap-sass/assets/stylesheets' // tell Sass to look in the Bootstrap stylesheets directory when compiling
                },
                files: [{
                    expand: true,
                    cwd: 'css/sources',
                    src: 'style.scss',
                    dest: 'css',
                    ext: '.css'
                }]
            },
            prod: {
                options: {
                    style: 'compressed',
                    require: ['breakpoint'],
                    loadPath: 'node_modules/bootstrap-sass/assets/stylesheets' // tell Sass to look in the Bootstrap stylesheets directory when compiling
                },
 
                files: [{
                    expand: true,
                    cwd: 'css/sources',
                    src: 'style.scss',
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'css/sources',
                    cssDir: 'css',
                    imagesDir: 'images',
                    javascriptsDir: 'js',
                    sourcemap: false,
                }
            }
        },
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'min',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            dist: {
                files: {
                    'assets/min/scripts.min.js' : ['assets/js/scripts.js'],
                    'assets/min/plugins.min.js' : ['assets/js/vendor/*.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['watch']);
};

