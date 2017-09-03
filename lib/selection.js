"use strict";

(function () {
  var selection = void 0;
  var currentSelectionText = "";
  var previousSelectionText = "";

  var setSelection = function setSelection() {
    selection = document.getSelection();
  };

  var setCurrentSelectionText = function setCurrentSelectionText(value) {
    currentSelectionText = value;
  };

  var setSelectionAndCurrentSelectionText = function setSelectionAndCurrentSelectionText() {
    setSelection(document.getSelection());
    setCurrentSelectionText(selection.toString());
  };

  var onMouseDown = function onMouseDown() {
    //clear current selection
    setCurrentSelectionText("");
    controls.hideControls();
  };

  var onMouseUp = function onMouseUp() {
    //only show controls if the current selection
    //is diff from previous selection
    if (isValidSelection()) {
      controls.showControls();
    }
    previousSelectionText = currentSelectionText;
  };

  var isValidSelection = function isValidSelection() {
    return currentSelectionText.length > 0 && currentSelectionText !== previousSelectionText;
  };

  var onSelectionChange = function onSelectionChange() {
    setSelectionAndCurrentSelectionText();
  };

  var onSelectionStart = function onSelectionStart() {
    //add listeners now that the selection has begun
    addMouseEventListeners();
  };

  var addMouseEventListeners = function addMouseEventListeners() {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
  };

  var removeMouseEventListeners = function removeMouseEventListeners() {
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('selectionchange', onSelectionChange);
  // document.addEventListener('selectionstart', onSelectionStart);

  addMouseEventListeners();
})();