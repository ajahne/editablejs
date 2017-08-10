let selectionBox = (() => {
  let x = 0;
  let y = 0;
  let width;
  let height;

  let getX = () => x;
  let getY = () => y;

  document.addEventListener('mouseup', (e) => {
    console.log('mouse up %o', e);
    x = e.pageX;
    y = e.pageY;
  }, false);

  return {
    getX,
    getY
  }
})();
