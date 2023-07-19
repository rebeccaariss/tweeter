/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the .tweet-container

    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.tweet-container').append($tweet);
    }
  };

  const createTweetElement = function(tweet) {
    let $tweet =
      $(`<article class="tweet">
        <header>
          <div class="author-info">
            <img src=${tweet.user.avatars} alt="author profile picture"/>
            <p class="author-name">${tweet.user.name}</p>
          </div>
          <p class="author-handle">${tweet.user.handle}</p>
        </header>
        <p class="tweet-text">${tweet.content.text}</p>
        <footer>
          <h6>${tweet.created_at}</h6>
          <div class="icons">
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-retweet"></i>
              <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>`);

    return $tweet;
  };

  renderTweets(data);
});