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
    var output = run(cmd);
    if (output == "" || output == "undefined" || output == undefined) {
      empty();
    } else {
      command(output);
    }
    cmd = "";
  } else {
    cmd += String.fromCharCode(e.keyCode);
  }
});
setup();
