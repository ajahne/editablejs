"use strict";

var id = "hello-world";
var el = document.getElementById(id);
var controls = document.getElementById('controls');

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

var onDoubleClick = function onDoubleClick() {
  showControls();
};

var showControls = function showControls() {
  controls.style.display = "block";
};

var hideControls = function hideControls() {
  controls.style.display = "none";
};

init();