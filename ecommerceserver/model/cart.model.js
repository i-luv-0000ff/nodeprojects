const mongoose = require("mongoose");

module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            cartId: String,
            productId: String,
            quantity: Number,
            totalPrice: Number
        });
    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const Cart = mongoose.model("cart", schema);
    return Cart;
};