/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container

  // will take in an array of tweet objects and append each one to the #tweet-container
  // will need to leverage crewteTweetElement function to do so (below)
  // pass tweet into it. jQuery object returned out of that function will be appended to container.
};

const createTweetElement = function(tweet) {
  // initial example:
  // let $tweet = $(`<article class="tweet">Hello world</article>`);

  let $tweet = /* Your code for creating the tweet element */
  // ...
  return $tweet;
};

renderTweets(data);

// template string example:
// const markup = `
//  <div class="person">
//     <h2>
//         ${person.name}
//     </h2>
//     <p class="location">${person.city}</p>
//     <p class="bio">${person.bio}</p>
//  </div>
// `;


// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Test / driver code (temporary). Eventually will get this from the server.
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

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.