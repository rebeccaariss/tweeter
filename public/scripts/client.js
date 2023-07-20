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
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the #tweet-container

    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweet-container').append($tweet);
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

    const $tweet = $(this).serialize();

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
  });

  loadTweets();

});