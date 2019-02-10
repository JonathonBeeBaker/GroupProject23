/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
let mongoose = require('mongoose');
/////////////////////////////////////////////// /* Initialize */ //////////////////////////////////////////////////////////
let Schema = mongoose.Schema; // Save a Reference to the Schema Constructor

/////////////////////////////////////////////// /* Model*/ //////////////////////////////////////////////////////////

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

/////////////////////////////////////////////// /* Export */ //////////////////////////////////////////////////////////

// This creates our model from the above schema, using mongoose's model method
let products = mongoose.model("Product", productsSchema);

module.exports = products; // Export the Article Model