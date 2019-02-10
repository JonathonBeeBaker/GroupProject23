const axios = require('axios');
const cheerio = require('cheerio');

module.exports = function (callback) {
    axios.get('https://imaginechildhood.com/collections/new-arrivals').then(res => {
        const $ = cheerio.load(res.data);
        let products = [];
        $('.product-list-item').each((id, el) => {
            let product = {};
            product.url = 'https://imaginechildhood.com/' + $(el).find('.product-list-item-thumbnail a').attr('href');
            product.image = $(el).find('img').attr('src');
            product.price = $(el).find('.regPrice').text().trim();
            product.category = 'newparent';
            product.item = $(el).find('h2.product-list-item-title').text().trim();
            console.log(product);
            products.push(product);
        });
        if (callback) callback(products);
    }).catch(err => console.log(err));
}