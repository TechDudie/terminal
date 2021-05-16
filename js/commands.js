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
    default:
      output = "Unknown command";
  }
  return output;
}
