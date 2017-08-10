'use strict';

var selectionBox = function () {
  var x = 0;
  var y = 0;
  var width = void 0;
  var height = void 0;

  document.addEventListener('mouseup', function (e) {
    console.log('mouse up %o', e);
    x = e.pageX;
    y = e.pageY;
  }, false);

  var getX = function getX() {
    return x;
  };

  var getY = function getY() {
    return y;
  };

  return {
    getX: getX,
    getY: getY
  };
}();