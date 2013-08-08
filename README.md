Grunt loader v0.1.1
===

A modular approach for grunt configuration. Forget about your Gruntfile.

This project aims to simplify your Gruntfile configuration by simply dropping
stand-alone YAML configuration files at `grunt/contrib/{package}.yaml`, and
tasks at `grunt/tasks/{taskname}.yaml`.

Please submit your questions, ideas or wathever here at [github issues](https://github.com/endel/grunt-loader/issues).

How to use
---

1. Add 'grunt-loader' dependency on your `package.json`:

        "devDependencies": {
            ...
            "grunt-loader": "0.1.1"
        }

2. Configure your Gruntfile once. It should looks like this:

    module.exports = function(grunt) {
      require('grunt-loader').load(grunt);
    };

3. Customize your contrib-* things and tasks at `grunt/contrib` and `grunt/tasks` directories.

Directory structure
---

Take a look at the `example` directory on this repository. It's important that
you follow exactly the same directory structure:

    project-root/
    ├── grunt/
    |   ├── contrib/    # contrib definitions
    |   └── tasks/      # custom tasks
    |       └── default.yaml
    ├── Gruntfile.js
    └── package.json

YAML vs JSON config
---

IMHO, YAML format are easier to read than JSON. You'll need to convert your
configurations from JSON to YAML, which is fine in most cases.

License
---

MIT License. See LICENSE file.
