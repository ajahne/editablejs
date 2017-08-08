let app = (() => {
  const ID_HELLO_WORLD = "hello-world";
  const ID_CONTROLS = "controls";
  let el = document.getElementById(ID_HELLO_WORLD);
  let controls = document.getElementById(ID_CONTROLS);

  let init = () => {
    hideControls();
  }
  
  let executeCommand = command => {
    document.execCommand(command, false, null);
  }

  let doBold = () => {
    executeCommand("bold");
    hideControls();
  }

  let doItalic = () => {
    executeCommand("italic");
    hideControls();
  }

  let doUnderline = () => {
    executeCommand("underline");
    hideControls();
  }

  let showControls = () => {
    controls.style.display = "block";
  }

  let hideControls = () => {
    controls.style.display = "none";
  }

  init();

  return {
    hideControls,
    showControls,
    doBold,
    doItalic,
    doUnderline
  }
})();
