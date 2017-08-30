let assert = chai.assert;
let simulateMouseUp = () => {
  let event = new MouseEvent('mouseup', {
    clientX: 50,
    pageY: 50,
  });
  document.dispatchEvent(event);
}

describe('rich text controls', function() {
  let controls = document.getElementById('controls');
  it('should show controls', function() {
    app.showControls();
    assert.equal(controls.style.display, 'block');
  });
  it('should hide controls', function() {
    app.hideControls();
    assert.equal(controls.style.display, 'none');
  });
  describe('position', function() {
    it ('should move 100px from the left', function() {
      let x = 100;
      app.setPosition(x, 0);
      assert.equal(controls.style.left, x + 'px');
    });
    it ('should move 100px from the top', function() {
      let y = 100;
      app.setPosition(0, y);
      assert.equal(controls.style.top, y + 'px');
    });
    it ('should be at the x position of the mouse pointer', function() {
      document.addEventListener('mouseup', (e) => {
        let x = e.clientX;
        assert.equal(controls.style.left, x + 'px');
      });
      simulateMouseUp();
    });
    it ('should be at the y position of the mouse pointer', function() {
      document.addEventListener('mouseup', (e) => {
        let y = e.clientY;
        assert.equal(controls.style.top, y + 'px');
      });
      simulateMouseUp();
    });
  });
});
