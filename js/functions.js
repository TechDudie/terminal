function print(text) {
  document.getElementById("terminal").value += text;
}
function command(output) {
  var text = "\n" + output + "\n" + username + "@" + hostname + " " + directory + " $ ";
  document.getElementById("terminal").value += text;
}
function empty() {
  var text = username + "@" + hostname + " " + directory + " $ ";
  document.getElementById("terminal").value += text;
}
function setup() {
  var text = username + "@" + hostname + " " + directory + " $ ";
  document.getElementById("terminal").value += text;
}
function cd(dir, param) {
  if (dir == undefined) {
    return "~";
  }
  if (dir.charAt(0) == "/") {
    dir = param;
  } else {
    dir += "/" + param;
  }
  return dir;
}
