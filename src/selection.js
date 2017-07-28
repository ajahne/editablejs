let selection;

document.onselectstart = function() {
  console.log('Selection Start');
}

document.onselectionchange = function() {
  selection = document.getSelection();
  console.log('On Selection Change %o', selection.toString());
}
