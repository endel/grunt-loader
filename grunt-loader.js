var path = require('path');

/**
 * VERSION
 */
exports.VERSION = "0.2.1";

/**
 * Load grunt config / tasks
 */
exports.load = function(grunt) {
	var init = {}, tasks = {};

	// load package.json
	init['package_file'] = grunt.file.readJSON('package.json');

	// load bower.json, if it exists
	if (grunt.file.exists('bower.json')) {
		init['bower_file'] = grunt.file.readJSON('bower.json');
	}

	// Read all grunt contrib configurations
	grunt.file.recurse("grunt", function(abspath, rootdir, subdir, filename) {
		if (filename[0] == ".") { return; }

		var file = filename.match(/[^\.]+/),
				config = (file[1] == ".json" ? grunt.file.readJSON(abspath) : grunt.file.readYAML(abspath)),
				packageName = file[0],
				packages = [ "grunt-contrib-" + packageName, "grunt-" + packageName, packageName ];

		for (var i = packages.length - 1; i >= 0; i--){
			var root = path.resolve('node_modules');
			var pkgfile = path.join(root, packages[i], 'package.json');
			if (grunt.file.exists(pkgfile)) {
				grunt.loadNpmTasks(packages[i]);
			}
		}

		init[packageName] = config;
	});

  // Initialize readed configs
	grunt.initConfig(init);

	// Read all grunt tasks
	grunt.file.recurse("grunt/tasks", function(abspath, rootdir, subdir, filename) {
		if (filename[0] == ".") { return; }

		var file = filename.match(/[^\.]+/),
				config = (file[1] == ".json" ? grunt.file.readJSON(abspath) : grunt.file.readYAML(abspath)),
				taskName = file[0];

		tasks[taskName] = config;
	});

	// Register all tasks
	for (var task in tasks) {
		grunt.registerTask(task, tasks[task]);
	}
}
