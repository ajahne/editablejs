let controls = (() => {
  const ID_HELLO_WORLD = "hello-world";
  const ID_CONTROLS = "controls";
  let controls;
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

  let addEventListeners = () => {
    //keep events that happen in the controls from bubbling up
    //this way we can ensure that any events registered to parent
    //elements (e.g. document) will not trigger a behavior tha impacts
    //our expected behavior. Keep events contained to the controls
    //example:
    //if document has a click handler that tells the controls to hideControls
    //then each time the controls will be hidden even if a valid selection
    //has been entered by the user
    controls.addEventListener('click', function(e) {
      console.log('controls click');
      e.stopPropagation();
    }, false);

    controls.addEventListener('mousedown', function(e) {
      console.log('controls mouse down');
      e.stopPropagation();
    }, false);
  };

  let createElements = () => {
    controls = document.getElementById(ID_CONTROLS);
  };

  let executeCommand = command => {
    document.execCommand(command, false, null);
  };

  let doBold = () => {
    executeCommand("bold");
  };

  let doItalic = () => {
    executeCommand("italic");
  };

  let doUnderline = () => {
    executeCommand("underline");
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

  let setPosition = (x, y) => {
    controls.style.left = x + 'px';
    controls.style.top = y + 'px';
  };

  let getLeft = () => {
    return controls.style.left;
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
