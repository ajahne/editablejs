const HELLO_WORLD = "hello-world";
const CONTROLS = "controls";
let el = document.getElementById(HELLO_WORLD);
let controls = document.getElementById(CONTROLS);

let init = () => {
  hideControls();
}

let doBold = () => {
  document.execCommand("bold", false, null);
  hideControls();
}

let doItalic = () => {
  document.execCommand("italic", false, null);
  hideControls();
}

let doUnderline = () => {
  document.execCommand("underline", false, null);
  hideControls();
}

let showControls = () => {
  controls.style.display = "block";
}

let hideControls = () => {
  controls.style.display = "none";
}

init();
