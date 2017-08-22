let assert = chai.assert;

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
  });
});
