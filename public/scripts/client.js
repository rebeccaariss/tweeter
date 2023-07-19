/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };

  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

    // will take in an array of tweet objects and append each one to the #tweet-container
    // will need to leverage crewteTweetElement function to do so (below)
    // pass tweet into it. jQuery object returned out of that function will be appended to container.
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
            <a href="" class="tweet-action-icon">
              <i class="fa-solid fa-flag"></i>
            </a>
            <a href="" class="tweet-action-icon">
              <i class="fa-solid fa-retweet"></i>
            </a>
            <a href="" class="tweet-action-icon">
              <i class="fa-solid fa-heart"></i>
            </a>
          </div>
        </footer>
      </article>`);

    return $tweet;
  };

  // renderTweets(data);

  // ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

  // Test / driver code (temporary). Eventually will get this from the server.
  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('.tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});