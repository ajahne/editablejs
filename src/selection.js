(() => {
  let selection;
  let currentSelectionText = "";
  let previousSelectionText = "";

  let setSelection = () => {
    selection = document.getSelection();
  }

  let setCurrentSelectionText = (value) => {
    currentSelectionText = value;
  }

  let setSelectionAndCurrentSelectionText = () => {
    setSelection(document.getSelection());
    setCurrentSelectionText(selection.toString());
  }

  document.onselectionchange = () => {
    setSelectionAndCurrentSelectionText();
  }

  document.onmousedown = () => {
    //clear current selection
    setCurrentSelectionText("");
  }

  document.onmouseup = () => {
    //only show controls if the current selection
    //is diff from previous selection
    if (currentSelectionText.length > 0 &&
        currentSelectionText !== previousSelectionText) {
      app.showControls();
    }
    else {
      app.hideControls();
    }
    previousSelectionText = currentSelectionText;
  }
})();
