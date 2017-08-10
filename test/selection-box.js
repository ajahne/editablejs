describe('selection-box', function() {
  it('should return the x position of the mouse', function() {
    let x = selectionBox.getX();
    assert.equal(typeof x, 'number');
  });
  it('should return the y position of the mouse', function() {
    let y = selectionBox.getY();
    assert.equal(typeof y, 'number');
  });
});
