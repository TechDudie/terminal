hostname = "terminal"
username = "terminal"
directory = "~"
document.addEventListener("keydown",  e => {
  if (e.keyCode === 8)  {
    e.preventDefault();
  }
  if (e.keyCode === 13)  {
    e.preventDefault();
    command();
  }
});
setup();
