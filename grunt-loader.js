/**
 * VERSION
 */
exports.VERSION = "0.1.0";

/**
 * Load grunt config / tasks
 */
exports.load = function(grunt) {
	var init = {}, tasks = {};

	// Package info
	init['pkg'] = grunt.file.readJSON('package.json');

	// Read all grunt contrib configurations
	grunt.file.recurse("grunt/contrib", function(abspath, rootdir, subdir, filename) {
		if (filename[0] == ".") { return; }

		var file = filename.match(/[^\.]+/),
				config = (file[1] == ".json" ? grunt.file.readJSON(abspath) : grunt.file.readYAML(abspath)),
				package = file[0];

		try {
      // TODO:  It shouldn't return warning when package module can't be found.
      //        Sometimes we're not going to load a module here.
			grunt.loadNpmTasks("grunt-contrib-" + package);
		} catch(e) {
			console.error(package + " is not found");
		}

		init[package] = config;
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
