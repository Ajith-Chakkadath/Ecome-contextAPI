const dotenv = require('dotenv');
const sellerProducts = require('../Models/sellerProductSchema');
const customerProducts = require('../Models/customerProductSchema');

const userCartAdd = async (req, res) => {
    try {
        const { sellerId, productId } = req.body;
        const userId = req.params.userId;

        const productDetails = await sellerProducts.findOne({ sellerId, productId });

        if (!productDetails) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Use findOne to find the user document based on userId
        const existingUser = await customerProducts.findOne({ userId });

        if (!existingUser) {
            // If the user doesn't exist, create a new document
            const newUser = await new customerProducts({
                userId: userId,
                cartProducts: [productDetails.toObject()]
            }).save();

            return res.json(newUser);
        }
       else{
        const updatedUser = await customerProducts.findOneAndUpdate(
            { userId },
            {
                $push: {
                    cartProducts: [productDetails.toObject()]
                }
            },
            { new: true } // Return the modified document
        );

        res.json(updatedUser);
       }
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    userCartAdd
};
