/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const $form = $("#tweet-post-form");

  const createTweetElement = function(tweet) {
    let $tweet =
      $(`<article class="tweet">
        <header>
          <div>
            <img src=${tweet.user.avatars} alt="author profile picture"/>
            <span class="author-name">${tweet.user.name}</span>
          </div>
          <span class="author-handle">${tweet.user.handle}</span>
        </header>
        <p class="tweet-text">${tweet.content.text}</p>
        <footer>
          <h6>${timeago.format(tweet.created_at)}</h6>
          <div class="icons">
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-retweet"></i>
              <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>`);

    return $tweet;
  };

  const renderTweets = function(tweets) {
    // clear existing tweets before replacing with updated contents of db:
    // (prevents repeating sets of tweets)
    $("#tweet-container").empty(".tweet");

    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and prepends it to the #tweet-container
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweet-container').prepend($tweet);
    }
  };

  const loadTweets = function() {
    $.ajax({
      method: "GET",
      url: "/tweets",
      success: (tweets) => {
        renderTweets(tweets);
      },
      fail: (error) => {
        console.log("error: ", error);
      }
    });
  };

  $form.on("submit", function(event) {
    event.preventDefault(); // event.preventDefault prevents the default
    // form submission behaviour, which is to send the post request and
    // reload the page.

    const $tweet = $(this).serialize(); // form data in query string format per POST requirements
    const $tweetString = $("#tweet-text").val(); // captures text from textarea
    const $length = $tweetString.length; // length of text from textarea
    const $output = $("output"); // character counter

    // check if text area contains no characters or a string of spaces:
    if ($length === 0 || $tweetString === null || $tweetString.trim() === "") {
      // reset textarea/counter; alert user:
      $("#tweet-text").val("");
      $output.val(140);
      alert("Sorry! You need to add text before you can tweet. 🐦");
    } else if ($length > 140) {
      // alert user but do not reset in case they would like to edit existing tweet:
      alert("Character count cannot exceed 140 characters. Please trim your tweet. 🐦");
    } else {
      // reset textarea/counter; alert user:
      $("#tweet-text").val("");
      $output.val(140);
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: $tweet,
        success: () => {
          loadTweets();
        },
        fail: (error) => {
          console.log("error: ", error);
        }
      });
    }
  });

  loadTweets();

});