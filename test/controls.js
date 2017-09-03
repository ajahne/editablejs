let assert = chai.assert;

let buttonBold;
let buttonItalic;
let buttonUnderline;

let setButtons = () => {
  let controls = document.getElementById('controls');
  buttonBold = controls.getElementsByClassName('controls-button-bold')[0];
  buttonItalic = controls.getElementsByClassName('controls-button-italic')[0];
  buttonUnderline = controls.getElementsByClassName('controls-button-underline')[0];
}

let simulateMouseUp = () => {
  let event = new MouseEvent('mouseup', {
    clientX: 50,
    pageY: 50,
  });
  document.dispatchEvent(event);
}

let simulateMouseDown = () => {
  let event = new MouseEvent('mousedown');
  document.dispatchEvent(event);
}

let simulateBoldButtonClick = () => {
  let event = new MouseEvent('click');
  buttonBold.dispatchEvent(event);
}

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
