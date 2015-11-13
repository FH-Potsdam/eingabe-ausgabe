/*global module:false*/
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.

    // watch: {
    //   gruntfile: {
    //     files: '<%= jshint.gruntfile.src %>',
    //     tasks: ['jshint:gruntfile']
    //   },
    // },
    wiredep: {

      target: {

        // Point to the files that should be updated when
        // you run `grunt bower-install`
        src: [
          '_layouts/default.html','_layouts/crowd.html'
        ],

        // Optional:
        // ---------
        cwd: '',
        dependencies: true,
        devDependencies: false,
        exclude: [],
        fileTypes: {},
        ignorePath: '',
        overrides: {}
      }
    },
    watch: { // for development run 'grunt watch'
      jekyll: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
    },

    cssmin: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'css/main.min.css': ['bower_components/bootstrap/dist/css/bootstrap.css','bower_components/bootstrap-material-design/dist/css/material.css','bower_components/bootstrap-material-design/dist/css/ripples.css','bower_components/fontawesome/css/font-awesome.css','css/main-1415.css','css/pdxiii.css']
    }
  }
},
 uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files: {
        'js/main.min.js': ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js', 'bower_components/holderjs/holder.js', 'bower_components/bootstrap-material-design/dist/js/material.js', 'bower_components/bootstrap-material-design/dist/js/ripples.js', 'js/jquery.fittext.js', 'js/shuffle.js', 'js/main-1415.js']
      }
    }
  }

  });

  grunt.registerTask('bower-install', ['wiredep']);
  // Default task.
  grunt.registerTask('default', ['jekyll']);

};