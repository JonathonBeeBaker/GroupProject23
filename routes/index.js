
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

}

