
const db = require('../models');




module.exports = function(app){
    app.get("/api/loggedIn", (req, res) => {
        db.user.findOne({_id: req.session.user_id}).then(user => {
            res.json(user);
        });  
    })

    app.post("/api/login", (req, res) =>{
        const username = req.body.username;
        const password = req.body.password;
        db.user.findOne({
            username: username,
            password: password
        }).then(user => {
            if (user) {
                req.session.user_id = user._id;
                res.json(user);
            } else {
                res.session.destroy();
                res.json(null);
            }
        })
        .catch(err => res.json(err));

    });

    app.post('/api/register', function (req, res) {
        let user = new db.user(req.body);
        user.save().then(newUser => {
            req.session.user_id = newUser._id;
            res.json(newUser);
        }).catch(err => res.json(err));
    });
    app.get('/api/logout', function (req, res) {
        req.session.destroy();
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

    app.get('/api/products/teens', (req, res) => {
        db.products.find({category: 'teens'}).then(products => res.json(products));
    });

    app.get('/api/products/kids', (req, res) => {
        db.products.find({category: 'kids'}).then(products => res.json(products));
    });

    app.get('/api/scrape/teens', function(rec, res){
        const scraper = require('../scraper/teens');
        scraper(function (products) {
            products.map(function(item) {
                const product = new db.products(item);
                product.save();
            }) 
            res.json('Done');
        });
        
    });
    app.get("/api/scrape/elderly", (req, res) => {
        require("../scraper/elderly")(products => {
            products.map(item => {
                let product = new db.products(item);
                product.save();
            });    
                res.json('Done');
        });
     
    });
    app.get("/api/products/elderly", (req, res) => {
        db.products.find({category: "elderly"}).then(products => res.json(products));
    });  
}



