/*
* What should the selection do?
* show controls when a new set of text has been selected
* hide controls when no selection
*/
(() => {
  // let assert = chai.assert;
  let sandbox = sinon.createSandbox();

  let simulateSelectionChange = () => {
    let event = new Event('selectionchange');
    document.dispatchEvent(event);
  };

  let simulateSelectionStart = () => {
    let event = new Event('selectionstart');
    document.dispatchEvent(event);
  };

  let simulateMouseUp = () => {
    let event = new MouseEvent('mouseup');
    document.dispatchEvent(event);
  };

  let simulateMouseDown = () => {
    let event = new MouseEvent('mousedown');
    document.dispatchEvent(event);
  };

  describe('selection', function() {
    beforeEach(function () {
      let stub = sandbox.stub(document, 'getSelection');
      stub.returns({
        toString:function() {
          return 'selected text';
        }
      });
    });

    afterEach(function () {
      // completely restore all fakes created through the sandbox
      sandbox.restore();
    });

    it ('should show the controls on a new selection', function() {
      simulateSelectionStart();
      simulateSelectionChange();
      simulateMouseUp();
      assert.equal(controls.isVisible(), true);
    });

    it ('should hide the controls when there is a click outside', function() {
      simulateSelectionStart();
      simulateSelectionChange();
      simulateMouseUp();
      simulateMouseDown();
      assert.equal(controls.isVisible(), false);
    });
  });
})();
