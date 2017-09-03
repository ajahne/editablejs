"use strict";

var controls = function () {
  var ID_HELLO_WORLD = "hello-world";
  var ID_CONTROLS = "controls";
  var controls = void 0;
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

  var addEventListeners = function addEventListeners() {
    //keep events that happen in the controls from bubbling up
    //this way we can ensure that any events registered to parent
    //elements (e.g. document) will not trigger a behavior tha impacts
    //our expected behavior. Keep events contained to the controls
    //example:
    //if document has a click handler that tells the controls to hideControls
    //then each time the controls will be hidden even if a valid selection
    //has been entered by the user
    controls.addEventListener('click', function (e) {
      console.log('controls click');
      e.stopPropagation();
    }, false);

    controls.addEventListener('mousedown', function (e) {
      console.log('controls mouse down');
      e.stopPropagation();
    }, false);
  };

  var createElements = function createElements() {
    controls = document.getElementById(ID_CONTROLS);
  };

  var executeCommand = function executeCommand(command) {
    document.execCommand(command, false, null);
  };

  var doBold = function doBold() {
    executeCommand("bold");
  };

  var doItalic = function doItalic() {
    executeCommand("italic");
  };

  var doUnderline = function doUnderline() {
    executeCommand("underline");
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

  var setPosition = function setPosition(x, y) {
    controls.style.left = x + 'px';
    controls.style.top = y + 'px';
  };

  var getLeft = function getLeft() {
    return controls.style.left;
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