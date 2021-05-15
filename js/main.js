document.addEventListener("keydown",  e => {
  if (e.keyCode === 8)  {
    e.preventDefault();
  }
});
function print(text) {
  document.getElementById("terminal").value += text;
}
print("Hello World!");
