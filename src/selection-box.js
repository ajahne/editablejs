let selectionBox = (() => {
  let x = 0;
  let y = 0;
  let width;
  let height;

  document.addEventListener('mouseup', function(e) {
    console.log('mouse up %o', e);
    x = e.pageX;
    y = e.pageY;
  }, false);

  let getX = () => x;

  let getY = () => y;

  return {
    getX,
    getY
  }
})();
