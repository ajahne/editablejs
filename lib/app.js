"use strict";

var HELLO_WORLD = "hello-world";
var CONTROLS = "controls";
var el = document.getElementById(HELLO_WORLD);
var controls = document.getElementById(CONTROLS);

var init = function init() {
  hideControls();
};

var doBold = function doBold() {
  document.execCommand("bold", false, null);
  hideControls();
};

var doItalic = function doItalic() {
  document.execCommand("italic", false, null);
  hideControls();
};

var doUnderline = function doUnderline() {
  document.execCommand("underline", false, null);
  hideControls();
};

var showControls = function showControls() {
  controls.style.display = "block";
};

var hideControls = function hideControls() {
  controls.style.display = "none";
};

init();