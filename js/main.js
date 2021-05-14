// prevent text from being deleted
// https://stackoverflow.com/questions/36318658/how-to-prevent-a-user-from-removing-the-first-three-characters-in-a-text-input
// hack, needs to be replaced because user input cant be deleted
$(document).on('keydown', function (e) {
  if (e.keyCode == 8 && $('#Lab').is(":focus") && $('#Lab').val().length < 4) {
      e.preventDefault();
  }
});
