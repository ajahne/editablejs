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

  document.onselectionchange = function () {
    setSelectionAndCurrentSelectionText();
  };

  document.onmousedown = function () {
    //clear current selection
    setCurrentSelectionText("");
  };

  document.onmouseup = function () {
    //only show controls if the current selection
    //is diff from previous selection
    if (currentSelectionText.length > 0 && currentSelectionText !== previousSelectionText) {
      app.showControls();
    } else {
      app.hideControls();
    }
    previousSelectionText = currentSelectionText;
  };
})();