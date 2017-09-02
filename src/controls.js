let controls = (() => {
  const ID_HELLO_WORLD = "hello-world";
  const ID_CONTROLS = "controls";
  let controls;
  let x;
  let y;
  let buttonBold;
  let buttonItalic;
  let buttonUnderline;
  let buttons;

  let init = () => {
    createElements();
    setupButtons();
    addEventListeners();
    setControlsPositionStyleToAbsolute();
    hideControls();
  };

  let setupButtons = () => {
    setButtons();
    addButtonClickHandlers();
  };

  let setButtons = () => {
    buttonBold = controls.getElementsByClassName('controls-button-bold')[0];
    buttonItalic = controls.getElementsByClassName('controls-button-italic')[0];
    buttonUnderline = controls.getElementsByClassName('controls-button-underline')[0];
    buttons = {
      bold: {
        element: buttonBold,
        clickHandler: doBold
      },
      italic: {
        element: buttonItalic,
        clickHandler: doItalic
      },
      underline: {
        element: buttonUnderline,
        clickHandler: doUnderline
      }
    }
  };

  let addButtonClickHandlers = () => {
    for (let key in buttons) {
      if (buttons.hasOwnProperty(key)) {
          buttons[key].element.addEventListener('click', buttons[key].clickHandler);
      }
    }
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

  let isVisible = () => {
    return controls.style.display === "block";
  }

  let setPosition = (newX, newY) => {
    x = newX;
    y = newY;
    controls.style.left = x + 'px';
    controls.style.top = y + 'px';
  };

  let getX = () => {
    return x;
  };

  let getLeft = () => {
    return controls.style.left
  };

  let getY = () => {
    return y;
  };

  let getTop = () => {
    return controls.style.top;
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
    setPosition,
    getLeft,
    getTop,
    isVisible
  };
})();
