module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json');

  // Project configuration.
  grunt.initConfig({
    pkg: pkg,
    uglify: {
      build: {
        src: 'src/atomatodata.autocomplete.js',
        dest: 'dist/atomatodata.autocomplete.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

  grunt.task.registerTask('build', 'Create release', function() {
    var version = pkg.version,
        src = grunt.file.read('src/atomatodata.autocomplete.js').replace('%version%', version),
        filePath = 'dist/atomatodata.autocomplete.js';

    // Update not minimized release version:
    console.log('Updating: ' + filePath);
    grunt.file.write(filePath, src);

    // Minify latest version:
    grunt.task.run('uglify');

    // Update plugin version:
    filePath = 'atomatodata.autocomplete.json';
    src = grunt.file.readJSON(filePath);

    if (src.version !== version){
      src.version = version;
      console.log('Updating: ' + filePath);
      grunt.file.write(filePath, JSON.stringify(src, null, 4));
    } else {
      console.log('No updates for: ' + filePath);
    }

    // Update bower version:
    filePath = 'bower.json';
    src = grunt.file.readJSON(filePath);

    if (src.version !== version){
      src.version = version;
      console.log('Updating: ' + filePath);
      grunt.file.write(filePath, JSON.stringify(src, null, 4));
    } else {
      console.log('No updates for: ' + filePath);
    }
  });
};
