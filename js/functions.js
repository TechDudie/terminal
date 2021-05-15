function print(text) {
  document.getElementById("terminal").value += text;
}
function command() {
  var text = "\n" + username + "@" + hostname + " " + directory + " $ ";
  document.getElementById("terminal").value += text;
}
function setup() {
  var text = username + "@" + hostname + " " + directory + " $ ";
  document.getElementById("terminal").value += text;
}
function directory(dir, param) {
  if (dir.charAt(0) == "/") {
    dir = param;
  } else {
    dir += param;
  }
}
