'use-strict';

var Mochawesome = require('mochawesome');
var JUnit = require('mocha-junit-reporter');


function MochaCircleCIReporter(runner, options) {
  new Mochawesome(runner, options);
  new JUnit(runner, options);
}

module.exports = MochaCircleCIReporter;
