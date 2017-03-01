'use strict';
var Generator = require('yeoman-generator');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(
      'Welcome to the superb "generator-devrun" generator!'
    );
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  },
});

