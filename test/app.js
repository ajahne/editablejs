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
});
