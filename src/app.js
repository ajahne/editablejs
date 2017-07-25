var id = "hello-world";
var el = document.getElementById(id);
var controls = document.getElementById('controls');


function init() {
  hideControls();
}

function doBold() {
  document.execCommand("bold", false, null);
  hideControls();
}

function doItalic() {
  document.execCommand("italic", false, null);
  hideControls();
}

function doUnderline() {
  document.execCommand("underline", false, null);
  hideControls();
}

function onDoubleClick() {
  showControls();
}

function showControls() {
  controls.style.display = "block";
}

function hideControls() {
  controls.style.display = "none";
}

init();
