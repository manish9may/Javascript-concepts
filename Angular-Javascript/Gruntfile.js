// Generated on 2014-10-24 using generator-angular 0.9.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist',
    demo: 'demo'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      }
      // test: {
      //   options: {
      //     jshintrc: 'test/.jshintrc'
      //   },
      //   src: ['test/spec/{,*/}*.js']
      // }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '<%= yeoman.app %>/css/common/*.css',
            '<%= yeoman.app %>/views/angular-templates/*.*',
            '<%= yeoman.app %>/css/common/images/*.*',
            '<%= yeoman.app %>/scripts/common/*.js',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//,
        exclude: ['bower_components/*']
      }
    },

    // // Renames files for browser caching purposes
    // filerev: {
    //   dist: {
    //     src: [
    //       '<%= yeoman.dist %>/scripts/{,*/}*.js',
    //       '<%= yeoman.dist %>/styles/{,*/}*.css',
    //       '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
    //       '<%= yeoman.dist %>/styles/fonts/*'
    //     ]
    //   }
    // },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      src: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              //js: ['concat', 'uglifyjs'],
              js: ['concat'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },
    concat:{
      generated : {
        files :[{
            dest : '<%= yeoman.app %>/css/common/vendor.css',
            src  : ['bower_components/bootstrap/dist/css/bootstrap.css',
                    'bower_components/flexslider/flexslider.css',
                    'bower_components/datatables/media/css/jquery.dataTables.css',
                    'bower_components/blueimp-file-upload/css/jquery.fileupload.css',
                    'bower_components/blueimp-file-upload/css/jquery.fileupload-ui.css',
                    'bower_components/blueimp-file-upload/css/jquery.fileupload-noscript.css',
                    'bower_components/blueimp-file-upload/css/jquery.fileupload-ui-noscript.css',
                    'bower_components/angular-datatables/dist/plugins/bootstrap/datatables.bootstrap.css',
                    'bower_components/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css',
                    'bower_components/jquery-ui/themes/smoothness/jquery-ui.css',
                    '<%= yeoman.app %>/css/baseTheme/application.css'
                    ]
          },
          {
            dest : '<%= yeoman.app %>/scripts/common/scripts.js',
            src : ['<%= yeoman.app %>/js/app.js',
                    '<%= yeoman.app %>/js/providers/angular-template-url.js',
                    '<%= yeoman.app %>/js/services/angular-element-popover-service.js',
                    '<%= yeoman.app %>/js/directives/angular-form-submit.js',
                    '<%= yeoman.app %>/js/directives/angular-ajax-form-submit.js',
                    '<%= yeoman.app %>/js/directives/angular-select-menu.js',
                    '<%= yeoman.app %>/js/directives/angular-date-picker.js',
                    '<%= yeoman.app %>/js/directives/angular-form-validation.js',
                    '<%= yeoman.app %>/js/directives/angular-form-element-validation.js',
                    '<%= yeoman.app %>/js/directives/angular-element-popover.js']
          },
          {
            dest : '<%= yeoman.app %>/scripts/common/vendor.js',
            src  : ["bower_components/jquery/dist/jquery.js",
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
                "bower_components/multiple-select/jquery.multiple.select.js",
                "bower_components/flexslider/jquery.flexslider-min.js",
                "bower_components/angular-promise-tracker/promise-tracker-http-interceptor.js"]
    }]
      }
    },
    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/images']
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    uglify: {
      dist: {
        files: {
          '<%= yeoman.app %>/scripts/common/scripts.min.js': [
            '<%= yeoman.app %>/scripts/common/scripts.js'
          ],
          '<%= yeoman.app %>/scripts/common/vendor.min.js': [
            '<%= yeoman.app %>/scripts/common/vendor.js'
          ]
        }
      },
      options : {
        beautify : {
          ascii_only : true
        }
      }
    },
    cssmin : {
        options: {
              shorthandCompacting: false,
              roundingPrecision: -1
          },
          target : {
            files : {
              '<%= yeoman.app %>/css/common/vendor.min.css': [
               '<%= yeoman.app %>/css/common/vendor.css'
          ]   
            }
          }
    },
    // 'min': {
    //   'dist': 
    //       {
    //       'src': ['<%= yeoman.dist %>/scripts/scripts.js'],
    //       'dest': '<%= yeoman.dist %>/scripts/scripts.min.js'
    //       },
    //   'dist':    
    //       {
    //         'src': ['<%= yeoman.dist %>/scripts/vendor.js'],
    //         'dest': '<%= yeoman.dist %>/scripts/vendor.min.js'
    //       }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.app %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.app %>/images'
        }]
      }
    },
    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
       files: {
                '<%= yeoman.app %>/scripts/common/scripts.js': ['<%= yeoman.app %>/scripts/common/scripts.js'],
                '<%= yeoman.app %>/scripts/common/vendor.js': ['<%= yeoman.app %>/scripts/common/vendor.js']
            }
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.app %>/*.html']
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
        },{
          expand: true,
          cwd : '<%= yeoman.app %>',
          dest: '<%= yeoman.app %>/views',
          src : ['angular-templates/*']
        }, {
          expand: true,
          cwd: 'bower_components/jquery-ui/themes/smoothness',
          dest: '<%= yeoman.app %>/css/common',
          src: ['images/*']
        }, {
          expand: true,
          cwd: 'bower_components/bootstrap/dist',
          src: 'fonts/*',
          dest: '<%= yeoman.app %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'uglify',
    //'filerev',
    'cssmin',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    //'test',
    'build'
  ]);
};
