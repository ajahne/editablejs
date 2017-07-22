// document.designMode = "on";
var id = "hello-world";
var el = document.getElementById(id);
// el.document.execCommand("bold", false, "");
// document.execCommand("bold", false, null);
// el.style.color="red";

function doBold() {
  document.execCommand("bold", false, null);
}
