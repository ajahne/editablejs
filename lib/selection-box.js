'use strict';

var selectionBox = function () {
  var x = 0;
  var y = 0;
  var width = 0;
  var height = 0;

  var getX = function getX() {
    return x;
  };
  var getY = function getY() {
    return y;
  };
  var getWidth = function getWidth() {
    return width;
  };
  var getHeight = function getHeight() {
    return height;
  };

  document.addEventListener('mouseup', function (e) {
    x = e.pageX;
    y = e.pageY;
  }, false);

  return {
    getX: getX,
    getY: getY,
    getWidth: getWidth,
    getHeight: getHeight
  };
}();