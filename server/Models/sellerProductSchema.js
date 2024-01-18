const mongoose = require("mongoose");

const sellerProductSchema = new mongoose.Schema({
 
  title: {
    type: String,
    required: true
  },

  price: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: true
  },
  productId:{
    type:String
  },
  sellerId:{
    type:String
  },

  category: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("sellerProducts", sellerProductSchema);
