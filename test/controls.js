let assert = chai.assert;
let simulateMouseUp = () => {
  let event = new MouseEvent('mouseup', {
    clientX: 50,
    pageY: 50,
  });
  document.dispatchEvent(event);
}

describe('rich text controls', function() {
  // let controls = document.getElementById('controls');
  it('should show controls', function() {
    controls.showControls();
    assert.equal(controls.isVisible(), true);
  });
  it('should hide controls', function() {
    controls.hideControls();
    assert.equal(controls.isVisible(), false);
  });
  describe('position', function() {
    it ('should move 100px from the left', function() {
      let x = 100;
      controls.setPosition(x, 0);
      assert.equal(controls.getLeft(), x + 'px');
    });
    it ('should move 100px from the top', function() {
      let y = 100;
      controls.setPosition(0, y);
      assert.equal(controls.getTop(), y + 'px');
    });
    it ('should be at the x position of the mouse pointer', function() {
      let onMouseUp = e => {
        let x = e.clientX;
        assert.equal(controls.getLeft(), x + 'px');
      }
      document.addEventListener('mouseup', onMouseUp);
      simulateMouseUp();
      document.removeEventListener('mouseup', onMouseUp);
    });
    it ('should be at the y position of the mouse pointer', function() {
      let onMouseUp = e => {
        let y = e.clientY;
        assert.equal(controls.getTop(), y + 'px');
      }      
      document.addEventListener('mouseup', onMouseUp);
      simulateMouseUp();
      document.removeEventListener('mouseup', onMouseUp);
    });
  });
});
