// Require axios and cheerio, making our scrapes possible
var axios = require("axios");
var cheerio = require("cheerio");

// This function will scrape the Zumies website
var scrape = function(cb) {
  console.log("beginning")
  // Scrape the fatbraintoys website
  return axios.get("https://www.zumiez.com/catalogsearch/result/?d=4043&q=teen+clothing").then(function(res) {
    var $ = cheerio.load(res.data);
    console.log("scraping");
    // Make an empty array to save our products info
    var products = [];
    // Now, find and loop through each element that has the "css-180b3ld" class
    // (i.e, the section holding the articles)
    $(".item").each(function(i, element) {
      // In each article section, we grab the child with the class story-heading
      // Then we grab the inner text of the this element and store it
      // to the head variable. This is the article headline
      var item = $(element)
        .find(".product-name")
        .text()
        .trim();
    var url = $(this).find('.product-name').attr('href');
    var img = $(this).find('.product-image img').attr('src');
    var price = $(this).find('.sale-price').text().trim();
    console.log(img);
      // So long as our headline and sum and url aren't empty or undefined, do the following
      if (item) {

        // Initialize an object we will push to the articles array

        var dataToAdd = {
          item: item,
          url: "https://www.zumies.com" + url,
          image: img,
          price: price,
          category: 'teens'
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