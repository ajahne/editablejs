"use strict";

var app = function () {
  var ID_HELLO_WORLD = "hello-world";
  var ID_CONTROLS = "controls";
  var el = document.getElementById(ID_HELLO_WORLD);
  var controls = document.getElementById(ID_CONTROLS);

  var init = function init() {
    hideControls();
  };

  var executeCommand = function executeCommand(command) {
    document.execCommand(command, false, null);
  };

  var doBold = function doBold() {
    executeCommand("bold");
    hideControls();
  };

  var doItalic = function doItalic() {
    executeCommand("italic");
    hideControls();
  };

  var doUnderline = function doUnderline() {
    executeCommand("underline");
    hideControls();
  };

  var showControls = function showControls() {
    controls.style.display = "block";
  };

  var hideControls = function hideControls() {
    controls.style.display = "none";
  };

  init();

  return {
    hideControls: hideControls,
    showControls: showControls,
    doBold: doBold,
    doItalic: doItalic,
    doUnderline: doUnderline
  };
}();