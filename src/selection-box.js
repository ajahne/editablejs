let selectionBox = (() => {
  let x = 0;
  let y = 0;
  let width = 0;
  let height = 0;

  let getX = () => x;
  let getY = () => y;
  let getWidth = () => width;
  let getHeight = () => height;

  document.addEventListener('mouseup', (e) => {
    x = e.pageX;
    y = e.pageY;
  }, false);

  return {
    getX,
    getY,
    getWidth,
    getHeight
  };
})();
