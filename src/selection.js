(() => {
  let selection;
  let selectionText;

  document.onselectstart = () => {
    console.log('Selection Start');
  }

  document.onselectionchange = () => {
    selection = document.getSelection();
    selectionText = selection.toString();
    console.log('On Selection Change %o', selectionText);
    if (selectionText.length === 0) {
      app.hideControls();
    }
    else {
      app.showControls();
    }
  }
})();
