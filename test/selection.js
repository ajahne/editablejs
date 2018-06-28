/*
 * What should the selection do?
 * show controls when a new set of text has been selected
 * hide controls when no selection
 */
(() => {
  const assert = chai.assert;
  const sandbox = sinon.createSandbox();

  describe('selection', function() {
    beforeEach(function () {
      const stub = sandbox.stub(document, 'getSelection');
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
      it('should return the x position of the selection', function() {
        assert.equal(selectionBox.getX(), boudingClientRect.left);
      });
      it('should return the y position of the selection', function() {
        assert.equal(selectionBox.getY(), boudingClientRect.top);
      });
      it('should return the width of the selection', function() {
        assert.equal(selectionBox.getWidth(), boudingClientRect.width);
      });
      it('should return the height of the selection', function() {
        assert.equal(selectionBox.getHeight(), boudingClientRect.height);
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
