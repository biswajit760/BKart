

// Update User CartData : /api/cart/update

import User from "../models/User.js"

export const updateCart = async (req, res) => {
    try {
        const { userId, cartItems } = req.body
        await User.findByIdAndUpdate(userId, {cartItems})
        // res.json({ sucess: true, message: "Cart Updated" })
    } catch (error) {
        console.log(error.message)
        res.json({ sucess: false, message: error.message })
    }
}