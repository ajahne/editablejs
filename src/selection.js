let selection;
let selectionText;

document.onselectstart = function() {
  console.log('Selection Start');
}

document.onselectionchange = function() {
  selection = document.getSelection();
  selectionText = selection.toString();
  console.log('On Selection Change %o', selectionText);
  if (selectionText.length === 0) {
    hideControls();
  }
  else {
    showControls();
  }
}
