'use strict';

var EventEmitter = require('events').EventEmitter;
var util = require('util');

// mock test runner
function Runner() {
  Runner.super_.call(this);
}

util.inherits(Runner, EventEmitter);

Runner.prototype.start = function() {
  this.emit('start');
};

Runner.prototype.end = function() {
  this.emit('end');
};

Runner.prototype.startSuite = function(suite) {
  this.emit('suite', suite);
};

Runner.prototype.pass = function(test) {
  this.emit('pass', test);
  this.endTest();
};

Runner.prototype.fail = function(test, reason) {
  this.emit('fail', test, reason);
  this.endTest();
};

Runner.prototype.endTest = function() {
  this.emit('end test');
};

module.exports = Runner;