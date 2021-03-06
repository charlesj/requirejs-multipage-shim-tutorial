/*global module:false*/
'use strict';

var opt = require('./options');

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',

    clean: {
      folder: 'www-release'
    },

    requirejs: {
      compile: {
        options: opt
      }
    },

    mincss: {
      compile: {
        files: {
          'www-release/css/style.css': 'www-release/css/style.css',
          'www-release/css/bootstrap.css': 'www-release/css/bootstrap.css',
          'www-release/css/bootstrap-responsive.css': 'www-release/css/bootstrap-responsive.css'
        }
      }
    }
  });

  // Load tasks from NPM
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-mincss');

  // Default task.
  grunt.registerTask('default', 'clean requirejs mincss');

};
