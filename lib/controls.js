"use strict";

var controls = function () {
  var ID_HELLO_WORLD = "hello-world";
  var ID_CONTROLS = "controls";
  var el = void 0;
  var controls = void 0;
  var x = void 0;
  var y = void 0;
  var buttonBold = void 0;
  var buttonItalic = void 0;
  var buttonUnderline = void 0;
  var buttons = void 0;

  var init = function init() {
    createElements();
    setupButtons();
    addEventListeners();
    setControlsPositionStyleToAbsolute();
    hideControls();
  };

  var setupButtons = function setupButtons() {
    setButtons();
    addButtonClickHandlers();
  };

  var setButtons = function setButtons() {
    buttonBold = controls.getElementsByClassName('controls-button-bold')[0];
    buttonItalic = controls.getElementsByClassName('controls-button-italic')[0];
    buttonUnderline = controls.getElementsByClassName('controls-button-underline')[0];
    buttons = {
      bold: {
        element: buttonBold,
        clickHandler: doBold
      },
      italic: {
        element: buttonItalic,
        clickHandler: doItalic
      },
      underline: {
        element: buttonUnderline,
        clickHandler: doUnderline
      }
    };
  };

  var addButtonClickHandlers = function addButtonClickHandlers() {
    for (var key in buttons) {
      if (buttons.hasOwnProperty(key)) {
        buttons[key].element.addEventListener('click', buttons[key].clickHandler);
      }
    }
  };

  var handleMouseUp = function handleMouseUp(e) {
    controls.style.left = e.clientX + "px";
    controls.style.top = e.clientY + "px";
  };

  var addEventListeners = function addEventListeners() {
    document.addEventListener('mouseup', handleMouseUp);
  };

  var removeEventListeners = function removeEventListeners() {
    document.removeEventListener('mouseup', handleMouseUp);
  };

  var createElements = function createElements() {
    el = document.getElementById(ID_HELLO_WORLD);
    controls = document.getElementById(ID_CONTROLS);
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

  var isVisible = function isVisible() {
    return controls.style.display === "block";
  };

  var setPosition = function setPosition(newX, newY) {
    x = newX;
    y = newY;
    controls.style.left = x + 'px';
    controls.style.top = y + 'px';
  };

  var getX = function getX() {
    return x;
  };

  var getLeft = function getLeft() {
    return controls.style.left;
  };

  var getY = function getY() {
    return y;
  };

  var getTop = function getTop() {
    return controls.style.top;
  };

  var setControlsPositionStyleToAbsolute = function setControlsPositionStyleToAbsolute() {
    controls.style.position = 'absolute';
  };

  init();

  return {
    hideControls: hideControls,
    showControls: showControls,
    doBold: doBold,
    doItalic: doItalic,
    doUnderline: doUnderline,
    setPosition: setPosition,
    getLeft: getLeft,
    getTop: getTop,
    isVisible: isVisible
  };
}();