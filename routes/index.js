
const db = require('../models');


module.exports = function(app){
    app.get('/api', function(req, res ) {

        db.products.find({})
        .then (products => res.json(products))
        .catch(function(err){
            return res.json(err);
        }
        
        );
       
        res.json('working');
    

    });


    app.get('/api/scrape/kids', function(rec, res){
        const scraper = require('../scraper/kids');
        scraper(function (products) {
            products.map(item => {
                let product = new db.products(item);
                product.save();
            });
            res.json('Done');
        });

    });

    app.get('/api/scrape/newparents', (req, res) => {
        require('../scraper/newparents')(products => {
            products.map(item => {
                let product = new db.products(item);
                product.save();
            });
            res.json('Done');
        });
    });

    app.get('/api/products/newparents', (req, res) => {
        db.products.find({category: 'newparent'}).then(products => res.json(products));
    });

    app.get('/api/products/kids', (req, res) => {
        db.products.find({category: 'kids'}).then(products => res.json(products));
    });

    app.get('/api/scrape/teens', function(rec, res){
        const scraper = require('../scraper/teens');
        scraper(function (products) {
            res.json(products);
        });

    });


    app.get('/api/scrape/elderly', function(rec, res){
        const scraper = require('../scraper/teens');
        scraper(function (products) {
            res.json(products);
        });

    });
}



