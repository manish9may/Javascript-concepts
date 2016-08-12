'use strict';

module.exports = function(grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    var appConfig = {
        app: require('./bower.json').appPath || "web-app",
        dist: 'dist',
        config : require('./config.js')
    };
    // Define the configuration for all the tasks
    grunt.initConfig({
        // Project settings
        yeoman: appConfig,
        // Watches files for changes and runs tasks based on the changed files
        watch: {

        },
        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            }
        },
        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish'),
                force : true
            },
            all: {
                src: ['development-env/scripts/baseApp/{,*/}*.js','development-env/scripts/commonApp/{,*/}*.js']
            }
        },
        // Empties folders to start fresh
        clean: {
            dist: {
                options: {
                    force: true
                },
                src: ['production-env/{,*/}*']
            }
        },
        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['development-env/index.html'],
                ignorePath: /\.\.\//,
                exclude: ['bower_components/*'],
            }
        },
        concat: {
            generated: {
                files: [{
                    dest: 'production-env/min/css/common/vendor.css',
                    src: appConfig.config['vendor-css-config']
                }, {
                    dest: 'production-env/min/css/common/base.css',
                    src: appConfig.config['base-js-config']
                }, {
                    dest: 'production-env/min/messages/messages.js',
                    src: appConfig.config['properties-js-config']
                },{
                    dest: 'production-env/min/scripts/common/application.js',
                    src: appConfig.config['application-js-config']
                }, {
                    dest: 'production-env/min/scripts/common/vendor.js',
                    src: appConfig.config['vendor-js-config']
                }]
            }
        },
        // The following *-min tasks will produce minified files in the dist folder
        uglify: {
            dist: {
                files: {
                    'production-env/min/scripts/common/application.min.js': [
                        'production-env/min/scripts/common/application.js'
                    ],
                    'production-env/min/scripts/common/vendor.min.js': [
                        'production-env/min/scripts/common/vendor.js'
                    ]
                }
            },
            options: {
                beautify: {
                    ascii_only: true
                }
            }
        },
        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
            dist: {
                files: {
                    'production-env/min/scripts/common/application.js': ['production-env/min/scripts/common/application.js'],
                    'production-env/min/scripts/common/vendor.js': ['production-env/min/scripts/common/vendor.js']
                }
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['*.html']
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'production-env/min/css/common/vendor.min.css': [
                        'production-env/min/css/common/vendor.css'
                    ],
                    'production-env/min/css/common/base.min.css': [
                        'production-env/min/css/common/base.css'
                    ]
                }
            }
        },
        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.app %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        '*.html',
                        'views/{,*/}*.html',
                        'images/{,*/}*.{webp}',
                        'fonts/*'
                    ]
                }, {
                    expand: true,
                    cwd: 'bower_components/jquery-ui/themes/smoothness',
                    src: ['images/{,*/}*.*'],
                    dest: 'production-env/min/css/common'
                }, {
                    expand: true,
                    cwd: 'bower_components/bootstrap/dist',
                    src: 'fonts/*',
                    dest: 'production-env/min/css'
                },{
                    expand: true,
                    cwd: 'bower_components/jquery-ui/themes/smoothness',
                    dest: 'production-env/min/css/common',
                    src: ['images/*']
                },{
                    expand: true,
                    cwd : 'development-env',
                    src: ['images/{,*/}*.*'], 
                    dest: 'production-env/min/css/common/'
                },{
                    expand: true,
                    cwd : 'development-env',
                    src: ['views/{,*/}*.*'], 
                    dest: 'production-env'
                }]
            }
        },
        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: ['copy'],
            dist: ['copy']
        },
        includeSource: {
            options: {
                basePath: 'production-env',
                baseUrl : 'production-env/'
            },
            target: {
                files: {
                    'production-env/index.html': 'development-env/index.html'
                }
            }
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.registerTask('build', [
        'clean:dist',
        'jshint',
        'wiredep',
        'concurrent:dist',
        'concat',
        'ngAnnotate',
        'uglify',
        'cssmin',
        'includeSource'

    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};