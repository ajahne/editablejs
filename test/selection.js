/*
* What should the selection do?
* show controls when a new set of text has been selected
* hide controls when no selection
*/

let simulateSelectionChange = () => {
  let event = new Event('selectionchange');
  document.dispatchEvent(event);
}

let simulationMouseUp = () => {
  let event = new MouseEvent('mouseup');
  document.dispatchEvent(event);
}

let stub = sinon.stub(document, 'getSelection');
stub.returns({
  toString:function() {
    return 'selected text';
  }
});

describe('selection', function() {
  let controls = document.getElementById('controls');
  it ('should show the controls', function() {
    simulateSelectionChange();
    simulationMouseUp();
    assert.equal(controls.style.display, "block");
  });
});
