module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-smushit');

	grunt.registerTask('default', [ 'jshint', 'jasmine', 'uglify', 'smushit' ]);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				strict: false
			},
			all: [ 'Gruntfile.js', 'js/<%= pkg.name %>.js' ]
		},
		jasmine: {
			pivotal: {
				src: 'js/*.js',
				options: {
					specs: 'spec/*Spec.js',
					helpers: 'spec/*Helper.js'
				}
			}
		},
		uglify: {
			all: {
				files: {
					'js/<%= pkg.name %>.min.js': 'js/<%= pkg.name %>.js'
				}
			}
		},
		smushit: {
			path: {
				src: 'img/'
			}
		}
	});
};
