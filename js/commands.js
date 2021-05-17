function run(cmd) {
  var tokens = cmd.split(" ");
  var output = "";
  switch (tokens[0]) {
    case "pwd":
      output = directory;
      break;
    case "cd":
      directory = cd(directory,tokens[1]);
      break;
    case "echo":
      output = tokens[1];
      break;
    case "clear":
      document.getElementById("terminal").value = "";
      break;
    default:
      output = "Unknown command";
  }
  return output;
}
