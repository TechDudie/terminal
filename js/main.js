hostname = "terminal"
username = "terminal"
directory = "~"
document.addEventListener("keydown",  e => {
  if (e.keyCode === 8)  {
    e.preventDefault();
  }
  if (e.keyCode === 13)  {
    e.preventDefault();
    document.getElementById("terminal").value += "\n";
    command();
  }
});
function print(text) {
  document.getElementById("terminal").value += text;
}
function command() {
  var text = username + "@" + hostname + " " + directory + " $ ";
  document.getElementById("terminal").value += text;
}
command();
