$(document).ready(function() {
  const $text = $("#tweet-text");
  const $output = $("output");
  let charCount = 0; // updates based on length of textarea string

  // update output element to show remaining/excess characters:
  const adjustCount = function() {
    let counter = 140;
    counter -= charCount;

    $output.text(counter);

    // counter turns red past character limit of 140:
    if (counter < 0) {
      $output.css("color", "red");

    // when user deletes characters and arrives at character limit again
    // (counter will be at 0, meaning textarea contains 140 characters),
    // counter should go back to  original colour:
    } else if (counter >= 0) {
      $output.css("color", "#545149");
    }
  };

  $text.on("input", function() {
    charCount = $(this).val().length;
    adjustCount();
  });
});