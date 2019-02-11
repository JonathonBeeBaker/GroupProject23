// Require axios and cheerio, making our scrapes possible
var axios = require("axios");
var cheerio = require("cheerio");

// This function will scrape the Heavy website
var scrape = function(cb) {
  // Scrape the Heavy website
  return axios.get("https://heavy.com/gifts/2018/10/gifts-for-seniors/").then(function(res) {
    var $ = cheerio.load(res.data);
    console.log("scraping");
    // Make an empty array to save our products info
    var products = [];
    // Now, find and loop through each element that has the "css-180b3ld" class
    // (i.e, the section holding the articles)
    $(".c-product-card").each(function(i, element) {
      // In each article section, we grab the child with the class story-heading
      // Then we grab the inner text of the this element and store it
      // to the head variable. This is the article headline
      var item = $(element)
        .find(".c-product-card__title")
        .text()
        .trim();
    var url = $(this).find(".c-product-card__shop-link").attr("href");
    var img = $(this).find(".c-product-card__image-frame img").attr("data-src");
    var price = $(this).find(".js-dynamic-price").text().trim();
    console.log(img);
      // So long as our headline and sum and url aren't empty or undefined, do the following
      if (item) {

        // Initialize an object we will push to the articles array

        var dataToAdd = {
          item: item,
          url: url,
          image: img,
          price: price,
          category: "elderly"
        };

        products.push(dataToAdd);
      }
    });
    //return products;
    cb(products);
  }).catch(err => console.log(err) && cb("err"));
};

// Export the function, so other files in our backend can use it
module.exports = scrape;