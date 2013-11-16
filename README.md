Grunt loader v0.2.1 [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/endel/grunt-loader/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
===

A modular approach for grunt configuration.
Configure each of your plugins using [YAML](http://nodeca.github.io/js-yaml/) files, and don't ever touch your
Gruntfile.js.

Please submit your questions, ideas or wathever here at [github issues](https://github.com/endel/grunt-loader/issues).

How to use
---

1. Add 'grunt-loader' dependency on your `package.json`:

		"devDependencies": {
				...
				"grunt-loader": "0.2.1"
		}

2. Configure your Gruntfile once. It should looks like this:

		module.exports = function(grunt) {
			require('grunt-loader').load(grunt);
		};

3. Customize your configuration and tasks at `grunt/*.yaml` and `grunt/tasks/*.yaml`

At the `example` directory you can see a list of plugins usage examples, on the
`yaml` format.

Advantages
---

Pros:
- easier to find and modify (you don't need to scroll around all your Gruntfile)
- easier to copy/paste configurations through different projects

Cons:
- you'll need to learn YAML file format, which isn't a big deal


Contributing
---

Please contribute by submitting YAML configuration of any plugin you use. This
helps new-comers to get started.

Also you're welcome to submit new features or discuss ideas.

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

License
---

MIT License. See LICENSE file.
