require 'yaml'
require 'json'

desc 'Generate YAML sample files from node_modules'
task :default do
	totals = 0
	success = 0
	Dir['example/node_modules/grunt-contrib-*/docs/*-examples.md'].each do |example_file|
	# Dir['example/node_modules/grunt-contrib-*/docs/jst-examples.md'].each do |example_file|
    totals += 1
		markdown = open(example_file).read

		# Lets make some valid JSON representations from configuration examples
		matches = markdown.match(/```(js|javascript)?\n([^`]+)/)
		config = matches[2].strip

		# fix for jst-examples
		config = config.gsub('interpolate :', 'interpolate:')
		# config = config.gsub(/\ (\/[^\ ]+)\ /, '"!!js/regexp \1"')

		config = config.gsub(/([_a-zA-Z]+):/, '"\1":')
		config = config.gsub(/\/\/[^\n}]+[\n}]/, "")

		# remove grunt. lines
		config_lines = []
		config.lines.each do |line|
			config_lines << line unless (line.index(/grunt\.(register|load)/) || line.index('require('))
		end

		config = config_lines.join("\n").gsub(/^$/, "").strip

		if config.index('grunt.initConfig({')
			config = config.gsub('grunt.initConfig({', "{")
			config[-3..-1] = "}"
		end

		config = config.gsub(/\/\/([^$]+)$/m, "\n") # remove comments
		config = config.gsub("'", '"').gsub("\n", "").gsub(",}","}").gsub(",]","]")
		config = config.gsub(",  }","}")

		if ((index = config.index('{')).nil? || index > 0)
			config = "{#{config}}"
		end

		begin
			json = JSON.parse(config).values.first
			File.open("example/grunt/#{File.basename(example_file, "-examples.md")}.yaml", "w+") do |f|
				f.write(json.to_yaml.lines[1..-1].join)
			end
			success += 1
		rescue
			puts example_file
			puts config
			puts $!
		end

		puts ""

	end

  puts "Success: #{success} / #{totals}"
end
