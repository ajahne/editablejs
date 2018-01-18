let selection = ((selectionBox, controls) => {
  let selection;
  let currentSelectionText = '';
  let previousSelectionText = '';

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
  };

  let onMouseDown = () => {
    //clear current selection
    setCurrentSelectionText('');
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
  };

  let onSelectionChange = () => {
    setSelectionAndCurrentSelectionText();
    //avoid empty string selections that may cause errors
    if (isValidSelection()) {
      setupSelectionBox();
    }
    //only tell the controls to change their position
    //if the text itself has changed.  This avoids any unwanted
    //shifting based on the width/height of the box changing
    //simply because it has been modified by bold/italic/underline/etc
    if (currentSelectionText !== previousSelectionText) {
      setControlsPosition();
    }
  };

  let setControlsPosition = () => {
    controls.setPositionBasedOnSelectionBox(selectionBox);
  };

  let onSelectionStart = () => {
    //add listeners now that the selection has begun
    addMouseEventListeners();
  };

  let addMouseEventListeners = () => {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
  };

  let removeMouseEventListeners = () => {
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('selectionchange', onSelectionChange);
  // document.addEventListener('selectionstart', onSelectionStart);

  addMouseEventListeners();
})(selectionBox, controls);
