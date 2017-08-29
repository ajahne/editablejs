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
  xdescribe('dimensions', function() {
    it ('should have a width greater than 0', function() {
      assert.isTrue(selectionBox.getWidth() > 0, 'true');
    });
    it ('should have a height greater than 0', function() {
      assert.isTrue(selectionBox.getHeight() > 0, 'true');
    });
  });
});
