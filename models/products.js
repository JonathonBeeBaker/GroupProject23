let mongoose = require('mongoose');
let Schema = mongoose.Schema; // Save a Reference to the Schema Constructor

let productsSchema = new Schema({ // Create a New Schema Constructor for News Article

  image: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: true
  },

  item: {
    type: String,  
    required: true
  },

  category: {
    type: String,
    require: true
  }
});

let products = mongoose.model("Product", productsSchema);

module.exports = products;