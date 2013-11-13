require 'yaml'
require 'json'

desc 'Generate YAML sample files from node_modules'
task :generate do
	Dir['example/node_modules/grunt-contrib-*/docs/*-examples.md'].each do |example_file|
		markdown = open(example_file).read

		# Lets make some valid JSON representations from configuration examples
		puts example_file
		matches = markdown.match(/```(js|javascript)?\n([^`]+)/)

		config = matches[2].strip.gsub(/([_a-zA-Z]+):/, '"\1":')
		config = config.gsub(/\/\/[^\n}]+[\n}]/, "")

		if config.index('grunt.initConfig({')
			config = config.gsub('grunt.initConfig({', "{")
			config[-3..-1] = "}"
		end

		# remove grunt. lines
		config_lines = []
		config.lines.each do |line|
			config_lines << line unless line.index('grunt.')
		end
		config = config_lines.join("\n")
		config = config.gsub("'", '"').gsub("\n", "").gsub(",}","}").gsub(",]","]")
		config = config.gsub(",  }","}")

		if ((index = config.index('{')).nil? || index > 0)
			config = "{#{config}}"
		end

		begin
			puts JSON.parse(config).to_yaml
		rescue
			puts config
			puts $!
		end

		puts ""

	end
end
