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
