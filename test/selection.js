/*
* What should the selection do?
* show controls when a new set of text has been selected
* hide controls when no selection
*/

let simulateSelectionChange = () => {
  let event = new Event('selectionchange', {
    name:'foo',
      toString:function() {
        return 'selected text';
    }
  });
  document.dispatchEvent(event);
}

describe('selection', function() {
  it ('should show the controls', function() {
    let onSelectionChange = (e) => {
      console.log('selection test');
      console.log(e);
    };
    document.addEventListener('selectionchange',onSelectionChange);
    simulateSelectionChange();
    document.removeEventListener('selectionchange',onSelectionChange);
  });
});
