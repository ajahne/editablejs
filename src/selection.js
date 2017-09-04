let selection = ((selectionBox, controls) => {
  let selection;
  let currentSelectionText = "";
  let previousSelectionText = "";

  let setSelection = () => {
    selection = document.getSelection();
  };

  let setCurrentSelectionText = (value) => {
    currentSelectionText = value;
  };

  let setSelectionAndCurrentSelectionText = () => {
    setSelection(document.getSelection());
    setCurrentSelectionText(selection.toString());
  };

  let setupSelectionBox = () => {
    selectionBox.setPropertiesFromSelection(selection);
  }

  let onMouseDown = () => {
    //clear current selection
    setCurrentSelectionText("");
    controls.hideControls();
  };

  let onMouseUp = () => {
    //only show controls if the current selection
    //is diff from previous selection
    if (isValidSelection()) {
      controls.showControls();
    }
    previousSelectionText = currentSelectionText;
  };

  let isValidSelection = () => {
    return (currentSelectionText.length > 0 &&
            currentSelectionText !== previousSelectionText);
  }

  let onSelectionChange = () => {
    setSelectionAndCurrentSelectionText();
    setupSelectionBox();
    setControlsPosition();
  };

  let setControlsPosition = () => {
    controls.setPositionBasedOnSelectionBox(selectionBox);
  }

  let onSelectionStart = () => {
    //add listeners now that the selection has begun
    addMouseEventListeners();
  }

  let addMouseEventListeners = () => {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
  }

  let removeMouseEventListeners = () => {
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('selectionchange', onSelectionChange);
  // document.addEventListener('selectionstart', onSelectionStart);

  addMouseEventListeners();
})(selectionBox, controls);
