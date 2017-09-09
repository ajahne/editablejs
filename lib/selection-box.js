"use strict";

var selectionBox = function () {
  var x = 0;
  var y = 0;
  var width = 0;
  var height = 0;
  var selection = void 0;
  var range = void 0;
  var rangeBoundingClientRect = void 0;

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

  /*
   * What are we doing?
   * grab a selection and see what the properties are
   */
  var setPropertiesFromSelection = function setPropertiesFromSelection(value) {
    setSelection(value);
    setRange(selection.getRangeAt(0));
    setBoundingRectProperties(range.getBoundingClientRect());
  };

  var setRange = function setRange(value) {
    range = value;
  };

  var setSelection = function setSelection(value) {
    selection = value;
  };

  /**
  * Example
  *
  * bottom: 34
  * height: 18
  * left: 39
  * right: 79.140625
  * top: 16
  * width: 40.140625
  */
  var setBoundingRectProperties = function setBoundingRectProperties(rect) {
    x = rect.left;
    y = rect.top;
    width = rect.width;
    height = rect.height;
  };

  return {
    getX: getX,
    getY: getY,
    getWidth: getWidth,
    getHeight: getHeight,
    setPropertiesFromSelection: setPropertiesFromSelection
  };
}();