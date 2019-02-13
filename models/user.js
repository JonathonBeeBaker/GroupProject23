let mongoose = require('mongoose');
let Schema = mongoose.Schema; // Save a Reference to the Schema Constructor

let userSchema = new Schema({ // Create a New Schema Constructor for News Article

  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  

});

let user = mongoose.model("Product", productsSchema);

module.exports = user;