'use strict';

module.exports = function(grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    var appConfig = {
        app: require('./bower.json').appPath || "web-app",
        dist: 'dist'
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
                    src: ['bower_components/bootstrap/dist/css/bootstrap.css',
                        'bower_components/flexslider/flexslider.css',
                        'bower_components/datatables/media/css/jquery.dataTables.css',
                        'bower_components/blueimp-file-upload/css/jquery.fileupload.css',
                        'bower_components/blueimp-file-upload/css/jquery.fileupload-ui.css',
                        'bower_components/blueimp-file-upload/css/jquery.fileupload-noscript.css',
                        'bower_components/blueimp-file-upload/css/jquery.fileupload-ui-noscript.css',
                        'bower_components/angular-datatables/dist/plugins/bootstrap/datatables.bootstrap.css',
                        'bower_components/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css',
                        'bower_components/jquery-ui/themes/smoothness/jquery-ui.css'
                    ]
                }, {
                    dest: 'production-env/min/css/common/base.css',
                    src: ['development-env/css/application.css']
                }, {
                    dest: 'production-env/min/messages/messages.js',
                    src: ['development-env/properties/messages.js']
                },{
                    dest: 'production-env/min/scripts/common/application.js',
                    src: ['development-env/scripts/baseApp/app.js',
                           'development-env/scripts/baseApp/factory/HttpInterceptor.js',
                           'development-env/scripts/baseApp/providers/routes.js',                         
                           'development-env/scripts/baseApp/controllers/NavigationController.js',
                           'development-env/scripts/commonApp/app.js',
                           'development-env/scripts/commonApp/controllers/CommonWorkflowController.js']
                }, {
                    dest: 'production-env/min/scripts/common/vendor.js',
                    src: ["bower_components/jquery/dist/jquery.js",
                        "bower_components/es5-shim/es5-shim.js",
                        "bower_components/angular/angular.js",
                        "bower_components/jquery-ui/jquery-ui.js",
                        "bower_components/bootstrap/dist/js/bootstrap.js",
                        "bower_components/checklist-model/checklist-model.js",
                        "bower_components/angular-route/angular-route.js",
                        "bower_components/angular-ui-slider/src/slider.js",
                        "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
                        "bower_components/jquery.customSelect/jquery.customSelect.js",
                        "bower_components/flexslider/jquery.flexslider.js",
                        "bower_components/jquery-mousewheel/jquery.mousewheel.js",
                        "bower_components/datatables/media/js/jquery.dataTables.js",
                        "bower_components/datatable-fixedColumns/js/dataTables.fixedColumns.js",
                        "bower_components/angular-ui-scroll/dist/ui-scroll.js",
                        "bower_components/angular-ui-scrollpoint/dist/scrollpoint.js",
                        "bower_components/angular-ui-event/dist/event.js",
                        "bower_components/angular-ui-mask/dist/mask.js",
                        "bower_components/angular-ui-validate/dist/validate.js",
                        "bower_components/angular-ui-indeterminate/dist/indeterminate.js",
                        "bower_components/angular-ui-uploader/dist/uploader.js",
                        "bower_components/angular-ui-utils/index.js",
                        "bower_components/angular-ui-utils-jq/jq.js",
                        "bower_components/angular-animate/angular-animate.js",
                        "bower_components/blueimp-file-upload/js/jquery.fileupload.js",
                        "bower_components/blueimp-file-upload/js/jquery.fileupload-process.js",
                        "bower_components/blueimp-file-upload/js/jquery.fileupload-validate.js",
                        "bower_components/blueimp-file-upload/js/jquery.fileupload-angular.js",
                        "bower_components/blueimp-file-upload/js/jquery.iframe-transport.js",
                        "bower_components/awsaccordion/jquery.accordion.js",
                        "bower_components/jquery.numeric/index.js",
                        "bower_components/jquery.rotaterator/index.js",
                        "bower_components/moment/moment.js",
                        "bower_components/underscore/underscore.js",
                        "bower_components/hc-utils/hc-utils.js",
                        "bower_components/jquery.maskedinput/dist/jquery.maskedinput.js",
                        "bower_components/angular-datatables/dist/angular-datatables.js",
                        "bower_components/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap.js",
                        "bower_components/angular-datatables/dist/plugins/colreorder/angular-datatables.colreorder.js",
                        "bower_components/angular-datatables/dist/plugins/columnfilter/angular-datatables.columnfilter.js",
                        "bower_components/angular-datatables/dist/plugins/light-columnfilter/angular-datatables.light-columnfilter.js",
                        "bower_components/angular-datatables/dist/plugins/colvis/angular-datatables.colvis.js",
                        "bower_components/angular-datatables/dist/plugins/fixedcolumns/angular-datatables.fixedcolumns.js",
                        "bower_components/angular-datatables/dist/plugins/fixedheader/angular-datatables.fixedheader.js",
                        "bower_components/angular-datatables/dist/plugins/scroller/angular-datatables.scroller.js",
                        "bower_components/angular-datatables/dist/plugins/tabletools/angular-datatables.tabletools.js",
                        "bower_components/angular-ui-router/release/angular-ui-router.js",
                        "bower_components/angular-sanitize/angular-sanitize.js",
                        "bower_components/angular-input-modified/src/angular-input-modified.js",
                        "bower_components/ui-router-extras/release/ct-ui-router-extras.js",
                        "bower_components/angular-messages/angular-messages.js",
                        "bower_components/angular-translate/angular-translate.js",
                        "bower_components/ng-idle/angular-idle.js",
                        "bower_components/angular-promise-tracker/promise-tracker.js",
                        "bower_components/angular-unsavedChanges/dist/unsavedChanges.js",
                        "bower_components/jquery-placeholder/jquery.placeholder.js",
                        "bower_components/bootstrap-switch/dist/js/bootstrap-switch.js",
                        "bower_components/jquery.nicescroll/jquery.nicescroll.js",
                        "bower_components/angular-scroll/angular-scroll.js",
                        "bower_components/autoNumeric/autoNumeric.js",
                        "bower_components/highcharts-release/highcharts.js",
                        "bower_components/highcharts-release/highcharts-more.js",
                        "bower_components/highcharts-release/modules/exporting.js",
                        "bower_components/lodash/lodash.js",
                        "bower_components/Read-More-Directive/js/directives/readmore.js",
                        "bower_components/ng-tags-input/ng-tags-input.min.js",
                        "bower_components/angular-utf8-base64/angular-utf8-base64.js",
                        "bower_components/multiple-select/jquery.multiple.select.js",
                        "bower_components/flexslider/jquery.flexslider-min.js",
                        "bower_components/angular-promise-tracker/promise-tracker-http-interceptor.js"
                    ]
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