let id = "hello-world";
let el = document.getElementById(id);
let controls = document.getElementById('controls');

let init = () => {hideControls();}

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

let onDoubleClick = () => {
  showControls();
}

let showControls = () => {
  controls.style.display = "block";
}

let hideControls = () => {
  controls.style.display = "none";
}

init();
