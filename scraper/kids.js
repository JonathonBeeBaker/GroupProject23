// scrape script
// =============

// Require axios and cheerio, making our scrapes possible
var axios = require("axios");
var cheerio = require("cheerio");

// This function will scrape the fat brain toys website
var scrape = function() {
  // Scrape the NYTimes website
  return axios.get("https://www.fatbraintoys.com/").then(function(res) {
    var $ = cheerio.load(res.data);
    console.log("scraping");
    // Make an empty array to save our products info
    var products = [];

    // Now, find and loop through each element that has the "css-180b3ld" class
    // (i.e, the section holding the articles)
    $("div.css-1100km").each(function(i, element) {
      // In each article section, we grab the child with the class story-heading

      // Then we grab the inner text of the this element and store it
      // to the head variable. This is the article headline
      var head = $(this)
        .find("h2")
        .text()
        .trim();

      // Grab the URL of the article
      var url = $(this)
        .find("a")
        .attr("href");

      // Then we grab any children with the class of summary and then grab it's inner text
      // We store this to the sum variable. This is the article summary
      var sum = $(this)
        .find("p")
        .text()
        .trim();

      // So long as our headline and sum and url aren't empty or undefined, do the following
      if (head && sum && url) {
        // This section uses regular expressions and the trim function to tidy our headlines and summaries
        // We're removing extra lines, extra spacing, extra tabs, etc.. to increase to typographical cleanliness.
        var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

        // Initialize an object we will push to the articles array

        var dataToAdd = {
          headline: headNeat,
          summary: sumNeat,
          url: "https://www.fatbraintoys.com/" + url
        };

        products.push(dataToAdd);
      }
    });
    return articles;
  });
};

// Export the function, so other files in our backend can use it
module.exports = scrape;