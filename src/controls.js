let app = (() => {
  const ID_HELLO_WORLD = "hello-world";
  const ID_CONTROLS = "controls";
  let el;
  let controls;

  let init = () => {
    createElements();
    addEventListeners();
    setControlsPositionStyleToAbsolute();
    hideControls();
  };

  let handleMouseUp = (e) => {
    controls.style.left = e.clientX + "px";
    controls.style.top = e.clientY + "px";
  };

  let addEventListeners = () => {
    document.addEventListener('mouseup', handleMouseUp);
  };

  let removeEventListeners = () => {
    document.removeEventListener('mouseup', handleMouseUp);
  };

  let createElements = () => {
    el = document.getElementById(ID_HELLO_WORLD);
    controls = document.getElementById(ID_CONTROLS);
  };

  let executeCommand = command => {
    document.execCommand(command, false, null);
  };

  let doBold = () => {
    executeCommand("bold");
    hideControls();
  };

  let doItalic = () => {
    executeCommand("italic");
    hideControls();
  };

  let doUnderline = () => {
    executeCommand("underline");
    hideControls();
  };

  let showControls = () => {
    controls.style.display = "block";
  };

  let hideControls = () => {
    controls.style.display = "none";
  };

  let setPosition = (x,y) => {
    controls.style.left = x + 'px';
    controls.style.top = y + 'px';
  };

  let setControlsPositionStyleToAbsolute = () => {
    controls.style.position = 'absolute';
  };

  init();

  return {
    hideControls,
    showControls,
    doBold,
    doItalic,
    doUnderline,
    setPosition
  };
})();
