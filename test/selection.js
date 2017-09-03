/*
* What should the selection do?
* show controls when a new set of text has been selected
* hide controls when no selection
*/
(() => {
  let assert = chai.assert;
  let sandbox = sinon.createSandbox();

  describe('selection', function() {
    beforeEach(function () {
      let stub = sandbox.stub(document, 'getSelection');
      stub.returns(getSelectionResult);
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
    describe('selection-box', function() {
      it('should return the x position of the mouse', function() {
        let x = selectionBox.getX();
        assert.equal(typeof x, 'number');
      });
      it('should return the y position of the mouse', function() {
        let y = selectionBox.getY();
        assert.equal(typeof y, 'number');
      });
      it('should return the width of the selection', function() {
        let width = selectionBox.getWidth();
        assert.equal(typeof width, 'number');
      });
      it('should return the height of the selection', function() {
        let height = selectionBox.getHeight();
        assert.equal(typeof height, 'number');
      });

      describe('dimensions', function() {
        it ('should have a width greater than 0', function() {
          assert.isTrue(selectionBox.getWidth() > 0, 'true');
        });
        it ('should have a height greater than 0', function() {
          assert.isTrue(selectionBox.getHeight() > 0, 'true');
        });
      });
    });
  });
})();
