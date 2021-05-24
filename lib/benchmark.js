"use strict";

var timer = function timer() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'unnamed action';
  var start = new Date();
  return {
    stop: function stop() {
      var end = new Date();
      var time = end.getTime() - start.getTime();
      console.log('Timer:', name, 'finished in', time, 'ms');
    }
  };
};

module.exports = timer;