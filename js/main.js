var hostname = "terminal";
var username = "terminal";
var directory = "~";
var cmd = "";
document.addEventListener("keydown",  e => {
  if (e.keyCode === 8)  {
    e.preventDefault();
  } else if (e.keyCode === 13)  {
    e.preventDefault();
    cmd = cmd.toLowerCase();
    run(cmd);
    command();
    cmd = "";
  } else {
    cmd += String.fromCharCode(e.keyCode);
  }
});
setup();
