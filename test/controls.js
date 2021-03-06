const assert = chai.assert;

(() => {
  let buttonBold;
  let buttonItalic;
  let buttonUnderline;
  
  const selectionBox = {
    getX: function() {
      return boudingClientRect.left
    },
    getY: function() {
      return boudingClientRect.top;
    },
    getWidth: function() {
      return boudingClientRect.width;
    },
    getHeight: function() {
      return boudingClientRect.height;
    }
  };

  const setButtons = () => {
    const controls = document.getElementById('controls');
    buttonBold = controls.getElementsByClassName('controls-button-bold')[0];
    buttonItalic = controls.getElementsByClassName('controls-button-italic')[0];
    buttonUnderline = controls.getElementsByClassName('controls-button-underline')[0];
  };

  const simulateBoldButtonClick = () => {
    const event = new MouseEvent('click');
    buttonBold.dispatchEvent(event);
  };

  const getRectCenterX = () => {
    return boudingClientRect.left + boudingClientRect.width/2;
  };

  describe('rich text controls', function() {
    setButtons();
    it('should show controls', function() {
      controls.showControls();
      assert.equal(controls.isVisible(), true);
    });
    it ('should show the controls after a command has been clicked', function() {
      controls.showControls();
      //click bold
      simulateBoldButtonClick();
      simulateMouseUp();
      //controls should still be visible
      assert.equal(controls.isVisible(), true);
    });
    it('should hide controls', function() {
      controls.hideControls();
      assert.equal(controls.isVisible(), false);
    });

    describe('dimensions', function() {
      //note: must show controls first as hidden controls
      //has display:none
      it('should have width > 0', function() {
        controls.showControls();
        assert.equal(controls.getWidth() > 0, true);
        controls.hideControls();
      });
      it('should have height > 0', function() {
        controls.showControls();
        assert.equal(controls.getWidth() > 0, true);
        controls.hideControls();
      });
    });

    describe('position', function() {
      it ('should move 100px from the left', function() {
        const x = 100;
        controls.setPosition(x, 0);
        assert.equal(controls.getLeft(), x + 'px');
      });
      it ('should move 100px from the top', function() {
        const y = 100;
        controls.setPosition(0, y);
        assert.equal(controls.getTop(), y + 'px');
      });
      it ('should not move when a button is clicked', function() {
        //show controls
        controls.showControls();
        //get position
        const x0 = controls.getLeft();
        //click button
        simulateBoldButtonClick();
        simulateMouseUp(20, 20);
        //check position
        const x1 = controls.getLeft();
        assert.equal(x0,x1);
      });
      it('should be at the center of the selection box', function() {
        const centerX = getRectCenterX();
        const x = centerX - controls.getWidth()/2;
        controls.setPositionBasedOnSelectionBox(selectionBox);
        assert.equal(controls.getLeft(), x + 'px');
      });
      it('should be above the selection box', function() {
        controls.setPositionBasedOnSelectionBox(selectionBox);
        const top = parseInt(controls.getTop());
        assert.equal(top < selectionBox.getY(), true);
      });
    });
  });
})();
