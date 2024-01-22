const mongoose = require("mongoose");
const sellerProducts = require('../Models/sellerProductSchema')

const customerProductSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    cartProducts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'sellerProducts'
    }],
    buyProducts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:' sellerProducts'
    }],
    broughtProducts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sellerProducts'
    }]
});

module.exports = mongoose.model("customerProducts", customerProductSchema);
